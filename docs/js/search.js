(function() {
  function displaySearchResults(term, results) {
    var searchTerm = document.getElementById('search_term');
    searchTerm.innerHTML = `"${term}"`;
    var searchResults = document.getElementById('search_results');

    if (results.length) {
      var appendString = '';

      for (var i = 0; i < results.length; i++) {
        var item = results[i];
        appendString += '<li><a href="/vortex-api/' + item.ref + '"><h3>' + item.ref + '</h3></a>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    var idx = lunr.Index.load(window.search_index);

    var results = idx.search(searchTerm);
    displaySearchResults(searchTerm, results);
  }
})();
