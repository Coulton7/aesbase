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
            item(hit, {html, components}) {
                return html`
                <div class="search-result">
                    <h3>${components.Highlight({ hit, atrribute: 'title' })}</h3>
                    <p class="lead">${components.Snippet({ hit, attribute: 'type' })}</p>
                    <p>${components.Snippet({ hit, attribute: 'body' })}</p>
                </div>`;
            },
        }
    })
]);

search.start();