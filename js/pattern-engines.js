'use strict';

// We use the new fetch API and promises. The fallback is to link to a list in the monorepo.
if (window.fetch !== undefined && typeof Promise !== "undefined" && window.localStorage !== undefined) {
  var localStorageSetItem = function (key, value) {
    window.localStorage.setItem(key, value);
  }

  try {
    // Safari will throw an error in Private Browsing mode if we try to save to LocalStorage
    window.localStorage.setItem('test', true);
    window.localStorage.removeItem('test');
  } catch (e) {
    localStorageSetItem = function () {};
  }

  (function () {
    var repoPackagesUrl = 'https://api.github.com/repos/pattern-lab/patternlab-node/contents/packages?ref=master';
    var $list = $('#pattern-engine-list');

    function getPatternEngineVersion(packagePath) {
      var packageJsonUrl = 'https://api.github.com/repos/pattern-lab/patternlab-node/contents/<packagePath>/package.json?ref=master';
      var cachedVersion = window.localStorage.getItem(packagePath + '::version');

      if (cachedVersion !== null) {
        return Promise.resolve(cachedVersion);
      }

      // Fetch the version if it's not cached
      return window.fetch(packageJsonUrl.replace('<packagePath>', packagePath), { mode: 'cors' })
        .then(function (response) {
          return response.json();
        }).then(function (responseJson) {
          var version = JSON.parse(atob(responseJson.content)).version;

          // Cache the version
          localStorageSetItem(packagePath + '::version', version);
          return version;
        });
    }

    $list.html('<li>Loading...</li>');

    var cachedPackageList = JSON.parse(window.localStorage.getItem('packages'));
    var packageListPromise;

    if (cachedPackageList !== null) {
      packageListPromise = Promise.resolve(cachedPackageList);
    } else {
      packageListPromise = window.fetch(repoPackagesUrl, { mode: 'cors' })
        .then(function (response) {
          return response.json();
        }).then(function (packageList) {
          localStorageSetItem('packages', JSON.stringify(packageList));
          return packageList;
        });
    }

    // Use the GitHub API to get a list of all the packages in the monorepo
    packageListPromise.then(function (packageList) {
      $list.html('');
      packageList.sort().forEach(function (repoPackage) {

        // All the PatternEngine packages start with `engine-`
        if (repoPackage.path.indexOf('packages/engine-') === 0) {
          var engineName = repoPackage.path.replace('packages/engine-', '');
          $list.append($(
            '<li>'
            + '<a href="https://www.npmjs.com/package/@pattern-lab/engine-' + engineName + '">' + engineName + '</a>'
            + ' ('
            + '<code>@pattern-lab/engine-' + engineName + '</code>'
            + ' <span id="' + engineName + '-version"></span>'
            + ')'
            + '</li>'));

          // Add version info
          getPatternEngineVersion(repoPackage.path).then(function (version) {
            $('#' + engineName + '-version').text(version);
          });
        }
      });
    });
  })();
}