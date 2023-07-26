const searchClinet = algoliasearch ('ZUQNGEX563', '23e29710cc4469dec35bd50bc2164b3a');

const search = instantsearch({
    indexName: 'aesseal',
    searchClinet,
});

search.addWidgets ([
    instantsearch.widgets.searchBox({
        container: '#searchbox',
    }),

    instantsearch.widgets.hits ({
        container: '#hits',
    })
]);

search.start();