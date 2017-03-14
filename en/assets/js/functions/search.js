(function () {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');

        if (results.length) {
            var appendString = '';

            for (var i = 0; i < results.length; i++) {
                var item = store[results[i].ref];
                appendString += '<li><a href="' + item.url + '">' + item.title + '</a></li>';
            }

            appendString += '<hr>';
            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<li class="bold">No results found</li>';
        }
    }

    window.getSearch = function (event) {
        var searchTerm = event.target.value;

        if (searchTerm && searchTerm.length > 2) {
            // Initalize lunr with the fields it will be searching on. I've given title
            // a boost of 10 to indicate matches on this field are more important.
            var idx = lunr(function () {
                this.field('title', 10);
                this.field('desc');
                this.field('content', 5);
                this.field('url');
            }); 

            for (var key in window.store) { // Add the data to lunr
                idx.add({
                    'id': key,
                    'title': window.store[key].title,
                    'desc': window.store[key].desc,
                    'content': window.store[key].content,
                    'url': window.store[key].url
                });
            }

            var results = idx.search(searchTerm); // Get lunr to perform a search
            displaySearchResults(results, window.store); // We'll write this in the next section
        }
    };
})();