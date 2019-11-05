'use strict';

// We use the new fetch API and promises. The fallback is to link to a list in the monorepo.
if (window.fetch !== undefined && typeof Promise !== 'undefined' && window.localStorage !== undefined) {
  (function () {
    var repoPackagesUrl = 'https://api.github.com/repos/pattern-lab/patternlab-node/contents/packages?ref=master';
    var packageJsonUrl = 'https://api.github.com/repos/pattern-lab/patternlab-node/contents/packages/engine-<patternEngine>/package.json?ref=master';

    var storeItem = (function () {
      try {
        window.localStorage.setItem('safari-private-browsing-test', true);
        window.localStorage.removeItem('safari-private-browsing-test');

        return function (key, value) {
          window.localStorage.setItem(key, value);
        }
      } catch (e) {
        return function () {};
      }
    })();

    /**
     * Fetch and cache stuff from the GitHub API, or fetch from the cache available. The cache is
     * only valid for the current day (i.e. it will be invalidated at midnight).
     *
     * We need the cache because there is a rate limit on the GitHub API.
     *
     * We need proper error handling because we are likely to hit the rate limit in Safari
     * Private Browsing mode (saving to LocalStorage doesn't work in Private Browsing).
     *
     * @param {string}   key Key to use when saving to LocalStorage
     * @param {string}   url URL (to the GitHub API)
     * @param {function} fn  Function that processes the response from the API
     *
     * @returns a promise
     */
    function fetchAndCache(key, url, fn) {
      // Wait until the next day before looking for updates. This means that you will get updated
      // info "tomorrow", whenever "tomorrow" is for you.
      var date = window.localStorage.getItem(key + '_date');
      var currentDate = new Date().toJSON().substr(0, 10);
      var cachedValue = window.localStorage.getItem(key);

      if (cachedValue !== null && date === currentDate) {
        return Promise.resolve(JSON.parse(cachedValue));
      }

      return window.fetch(url, { mode: 'cors' })
        .then(function (response) {
          if (response.status === 200) {
            return response.json()
              .then(function (jsonResponse) {
                var value = fn(jsonResponse);

                storeItem(key, JSON.stringify(value));
                storeItem(key + '_date', currentDate);

                return value;
              });
          }

          // If API call fails we hope that we still have something cached...
          return JSON.parse(cachedValue);
        });
    }

    function getPatternEngines() {
      return fetchAndCache(
        'patternEngines',
        repoPackagesUrl,
        function (data) {
          return data
            .sort()
            .filter(function (pkg) {
              return pkg.name.indexOf('engine-') === 0;
            })
            .map(function (pkg) {
              return pkg.name.replace('engine-', '');
            });
        }
      );
    }

    function getPatternEngineVersion(patternEngine) {
      // Fetch the version if it's not cached
      return fetchAndCache(
        patternEngine + '::version',
        packageJsonUrl.replace('<patternEngine>', patternEngine),
        function (data) {
          return JSON.parse(atob(data.content)).version;
        }
      );
    }


    // Use the GitHub API to get a list of all the packages in the monorepo
    getPatternEngines().then(function (patternEngines) {
      if (patternEngines === null || patternEngines.length === 0) {
        return;
      }

      var $list = $('#pattern-engine-list');

      $list.html('');

      patternEngines.forEach(function (patternEngine) {
        $list.append($(
          '<li>'
          + '<a href="https://www.npmjs.com/package/@pattern-lab/engine-' + patternEngine + '">' + patternEngine + '</a>'
          + ' ('
          + '<code>@pattern-lab/engine-' + patternEngine + '</code>'
          + ' <span id="' + patternEngine + '-version"></span>'
          + ')'
          + '</li>'));

        // Add version info
        getPatternEngineVersion(patternEngine).then(function (version) {
          $('#' + patternEngine + '-version').text(version);
        });
      });
    });
  })();
}