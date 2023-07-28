const searchClient = algoliasearch('ZUQNGEX563', '23e29710cc4469dec35bd50bc2164b3a');

const search = instantsearch({
    indexName: 'aesseal',
    searchClient,
    routing: true,
});

search.addWidgets([
    instantsearch.widgets.configure({
        hitsPerPage: 10,
    })
])

search.addWidgets ([
    instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: 'Enter Your Keywords'
    }),
])

search.addWidgets([
    instantsearch.widgets.hits ({
        container: '#hits',
        templates: {
            item: '<div class="search-result"><h3>{{#helpers.highlight}}{{ "attribute": "title", "attribute": "name_1"}}</h3><p class="lead">{{"attribute": "type"}}</p><p>{{"attribute":"body"}}</p></div>'
        }
    })
]);

search.start();