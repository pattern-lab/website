'use strict';

// We use the new fetch API and promises. The fallback is to link to a list in the monorepo.
if (window.fetch !== undefined && typeof Promise !== "undefined") {
  (function () {
    var repoPackagesUrl = 'https://api.github.com/repos/pattern-lab/patternlab-node/contents/packages?ref=master';
    var $list = $('#pattern-engine-list');

    function getPatternEngineVersion(packagePath) {
      var packageJsonUrl = 'https://api.github.com/repos/pattern-lab/patternlab-node/contents/<packagePath>/package.json?ref=master'

      return window.fetch(packageJsonUrl.replace('<packagePath>', packagePath), { mode: 'cors' })
        .then(function (response) {
          return response.json();
        }).then(function (responseJson) {
          return JSON.parse(atob(responseJson.content)).version;
        });
    }

    $list.html('<li>Loading...</li>');

    // Use the GitHub API to get a list of all the packages in the monorepo
    window.fetch(repoPackagesUrl, { mode: 'cors' }).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      $list.html('');
//function(a, b) { return a.path === b.path ? 0 : a.path > b.path ? 1 : -1 }
      responseJson.sort().forEach(function (repoPackage) {
        // Show a list of all the packages starting with `engine-`
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