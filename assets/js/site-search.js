document.addEventListener("DOMContentLoaded", function() {

    var urlArray = window.location.pathname.split('/');
    var urlLang = urlArray[1];
    var filterLang = urlLang;

    let globeSearch = document.getElementById('hits');
    let usSearch = document.getElementById('usHits');

    window.dataLayer = window.dataLayer || [];
    const { connectSearchBox } = instantsearch.connectors;

    const searchClient = algoliasearch('ZUQNGEX563', '23e29710cc4469dec35bd50bc2164b3a');

    const renderSearchBox = (renderOptions, isFirstRender) => {
        const { query, refine, isSearchStalled, widgetParams } = renderOptions;

        if (isFirstRender) {
            const input =document.createElement('input');
            input.classList.add('ais-SearchBox-input');
            input.classList.add('form-control');

            const searchButton = document.createElement('button');
            searchButton.classList.add('ais-SearchBox-submit');
            searchButton.classList.add('btn');
            searchButton.classList.add('btn-danger');
            searchButton.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

            const loadingIndicator = document.createElement('span');
            loadingIndicator.textContent = 'Loading...';

            const clearButton = document.createElement('button');
            clearButton.textContent = 'X';

            searchButton.addEventListener('click', event => {
                refine(input.value);
            });

            input.addEventListener('keydown', function(e){
                if(e.code === "Enter") {
                    refine(input.value);
                }
            })

            clearButton.addEventListener('click', () => {
                clear(input);
            });

            widgetParams.container.appendChild(input);
            widgetParams.container.appendChild(searchButton);
            widgetParams.container.appendChild(loadingIndicator);
            widgetParams.container.appendChild(clearButton);
        }

        widgetParams.container.querySelector('input').value = query;
        widgetParams.container.querySelector('span').hidden = !isSearchStalled;
    };

    const customSearchBox = connectSearchBox (
        renderSearchBox
    );

    let typeMapping;
    let vidMapping;

        if (filterLang == "en") {
            typeMapping = {
                '3dmodels': '3D Models',
                'academy': 'Academy',
                'apiplans': 'API Plans',
                'article': 'Article',
                'bearingprotection': 'Bearing Protection',
                'cartridgemechanicalseals': 'Cartridge Mechanical Seals',
                'casestudies': 'Case Studies',
                'componentseals': 'Component Seals',
                'elastomers': 'Elastomers',
                'gasseals': 'Gas Seals',
                'glandpacking': 'Gland Packing',
                'industryguides': 'Industry Guides',
                'locations': 'Locations',
                'page': 'Web Page',
                'policies': 'Policies',
                'productbrochure': 'Product Brochure',
                'productcertificates': 'Product Certificates',
                'sealsupportsystems': 'Seal Support Systems',
                'video': 'Video',
                'whitepaper': 'Whitepaper',
            }
        } else if (filterLang == "es") {
            typeMapping = {
                '3dmodels': 'Modelos 3D',
                'academy': 'Academia',
                'apiplans': 'API Plans',
                'article': 'Artículo',
                'bearingprotection': 'Protección de Rodamientos',
                'cartridgemechanicalseals': 'Cierre mecánico de cartucho',
                'casestudies': 'Casos prácticos',
                'componentseals': 'Cierres de Componentes',
                'elastomers': 'Elastomers',
                'gasseals': 'Cierres de gas seco',
                'glandpacking': 'Empaquetadura',
                'industryguides': 'Guías del sector',
                'locations': 'Ubicaciones',
                'page': 'Página web',
                'policies': 'Políticas',
                'productbrochure': 'Catálogos de productos',
                'productcertificates': 'Certificados de producto',
                'sealsupportsystems': 'Sistemas de soporte de cierre',
                'video': 'Películas',
                'whitepaper': 'Whitepaper',
        }
        } else if (filterLang == "fr") {
            typeMapping = {
                '3dmodels': 'Modèles 3D',
                'academy': 'Académie',
                'apiplans': 'API Plans',
                'article': 'Article',
                'bearingprotection': 'Protections de Paliers',
                'cartridgemechanicalseals': 'Garnitures cartouches',
                'casestudies': 'Études de cas',
                'componentseals': 'Garnitures mécaniques bi-composants',
                'elastomers': 'Elastomers',
                'gasseals': 'Garnitures gaz',
                'glandpacking': 'Tresses d’étanchéité',
                'industryguides': 'Guides du secteur',
                'locations': 'Emplacement',
                'page': 'Web Page',
                'policies': 'Políticas',
                'productbrochure': 'Brochures des produits',
                'productcertificates': 'Certificats de produit',
                'sealsupportsystems': 'Systèmes d’exploitation',
                'video': 'Vidéos',
                'whitepaper': 'Whitepaper',
            }
        } else if (filterLang == "de") {
            typeMapping = {
                '3dmodels': '3D-Modelle',
                'academy': 'Akademie',
                'apiplans': 'API Plans',
                'article': 'Artikel',
                'bearingprotection': 'Lagerschutzdichtungen',
                'cartridgemechanicalseals': 'Patronendichtungen',
                'casestudies': 'Fallstudien',
                'componentseals': 'Komponentendichtungen',
                'elastomers': 'Elastomers',
                'gasseals': 'Gasgeschmierte Dichtungen',
                'glandpacking': 'Stopfbuchspackungen',
                'industryguides': 'Branchenführer',
                'locations': 'Standort',
                'page': 'Web Seite',
                'policies': 'Politiken',
                'productbrochure': 'Produkt-Broschüre',
                'productcertificates': 'Produktzertifikate',
                'sealsupportsystems': 'Versorgungssysteme',
                'video': 'Filme',
                'whitepaper': 'Whitepaper',
        }
    } else if (filterLang == "it") {
            typeMapping = {
                '3dmodels': 'Modelli 3D',
                'academy': 'Accademia',
                'apiplans': 'API Plans',
                'article': 'Articolo',
                'bearingprotection': 'Protettori per cuscinetti',
                'cartridgemechanicalseals': 'Tenute meccaniche a cartuccia',
                'casestudies': 'Casi di studio',
                'componentseals': 'Tenute a componenti',
                'elastomers': 'Elastomers',
                'gasseals': 'Tenute a gas',
                'glandpacking': 'Baderna',
                'industryguides': 'Guide del settore',
                'locations': 'Luoghi',
                'page': 'Pagina web',
                'policies': 'Politiche',
                'productbrochure': 'Opuscolo del prodotto',
                'productcertificates': 'Certificati di prodotto',
                'sealsupportsystems': 'Sistemi di supporto per le tenute',
                'video': 'Film',
                'whitepaper': 'Whitepaper',
            }
        }
        else if (filterLang == "pl") {
            typeMapping = {
                '3dmodels': 'Modele 3D',
                'academy': 'Akademia',
                'apiplans': 'API Plans',
                'article': 'Artykuł',
                'bearingprotection': 'Ochrona łożysk',
                'cartridgemechanicalseals': 'Uszczelnienia mechaniczne kompaktowe',
                'casestudies': 'Studia przypadków',
                'componentseals': 'Uszczelnienia komponentowe',
                'elastomers': 'Elastomers',
                'gasseals': 'Uszczelnienia gazowe',
                'glandpacking': 'Sznury dławicowe',
                'industryguides': 'Przewodniki branżowe',
                'locations': 'Lokalizacje',
                'page': 'Web Page',
                'policies': 'Polityka',
                'productbrochure': 'Broszura produktu',
                'productcertificates': 'Certyfikaty produktów',
                'sealsupportsystems': 'Systemy wspomagające uszczelnienia',
                'video': 'Filmy',
                'whitepaper': 'Whitepaper',
            }
        }
        else if (filterLang == "ru") {
            typeMapping = {
                '3dmodels': '3D-модели',
                'academy': 'Академия',
                'apiplans': 'API Plans',
                'article': 'Статья',
                'bearingprotection': 'Защита подшипников',
                'cartridgemechanicalseals': 'Картриджные Механические Уплотнения',
                'casestudies': 'Примеры из практики',
                'componentseals': 'Компонентные уплотнения',
                'elastomers': 'Elastomers',
                'gasseals': 'Газовое уплотнение',
                'glandpacking': 'Упаковка',
                'industryguides': 'Отраслевые руководства',
                'locations': 'Места',
                'page': 'веб-страница',
                'policies': 'Политика',
                'productbrochure': 'Брошюра о продукции',
                'productcertificates': 'Сертификаты на продукцию',
                'sealsupportsystems': 'Системы обеспечения уплотнений',
                'video': 'Видеоролики',
                'whitepaper': 'Whitepaper',
            }
        }
        else if (filterLang == "tr") {
            typeMapping = {
                '3dmodels': '3D Modeller',
                'academy': 'Akademi',
                'apiplans': 'API Plans',
                'article': 'Makale',
                'bearingprotection': 'Rulman Koruyucu',
                'cartridgemechanicalseals': 'Kartuş Mekanik Salmastralar',
                'casestudies': 'Vaka Çalışmaları',
                'componentseals': 'Komponent Salmastralar',
                'elastomers': 'Elastomers',
                'gasseals': 'Gaz Salmastraları',
                'glandpacking': 'Yumuşak Salmastralar',
                'industryguides': 'Endüstri Kılavuzları',
                'locations': 'Konumlar',
                'page': 'Web sayfası',
                'policies': 'Politikalar',
                'productbrochure': 'Ürün Broşürü',
                'productcertificates': 'Ürün Sertifikaları',
                'sealsupportsystems': 'Salmastra Destek Sistemleri',
                'video': 'Filmler',
                'whitepaper': 'Whitepaper',
            }
        }
        else if (filterLang == "zh-hans") {
            typeMapping = {
                '3dmodels': '三维模型',
                'academy': '学院',
                'apiplans': 'API Plans',
                'article': '文章',
                'bearingprotection': '轴承保护器',
                'cartridgemechanicalseals': '集装式机械密封',
                'casestudies': '案例研究',
                'componentseals': '两部件密封',
                'elastomers': 'Elastomers',
                'gasseals': '干气密封',
                'glandpacking': '盘根',
                'industryguides': '行业指南',
                'locations': '地点',
                'page': '网页',
                'policies': '政策',
                'productbrochure': '产品手册',
                'productcertificates': '产品证书',
                'sealsupportsystems': '密封辅助系统',
                'video': '短片',
                'whitepaper': 'Whitepaper',
            }
        }

        if(filterLang == "en") {
            vidMapping = {
                'industry': 'Industry',
                'glandpacking': 'Gland Packing Category',
                'sealsupportsystems': 'Seal Support Systems Category',
                'bearingprotectioncategories': 'Bearing Protection Category',
                'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
                'gasseals': 'Gas Seals Category',
                'componentseals': 'Component Seals Category',
            }
        } else if (filterLang == "es") {
            vidMapping = {
                'industry': 'Industria',
            }
        } else if (filterLang == "fr") {
            vidMapping = {
                'industry': 'Industrie',
                'glandpacking': 'Gland Packing Category',
                'sealsupportsystems': 'Seal Support Systems Category',
                'bearingprotectioncategories': 'Bearing Protection Category',
                'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
                'gasseals': 'Gas Seals Category',
                'componentseals': 'Component Seals Category',
            }
        } else if (filterLang == "de") {
            vidMapping = {
                'industry': 'Branchen',
                'glandpacking': 'Gland Packing Category',
                'sealsupportsystems': 'Seal Support Systems Category',
                'bearingprotectioncategories': 'Bearing Protection Category',
                'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
                'gasseals': 'Gas Seals Category',
                'componentseals': 'Component Seals Category',
            }
        } else if (filterLang == "it") {
            vidMapping = {
                'industry': 'Industria',
                'glandpacking': 'Gland Packing Category',
                'sealsupportsystems': 'Seal Support Systems Category',
                'bearingprotectioncategories': 'Bearing Protection Category',
                'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
                'gasseals': 'Gas Seals Category',
                'componentseals': 'Component Seals Category',
            }
        } else if (filterLang == "pl") {
            vidMapping = {
                'industry': 'Przemysł',
                'glandpacking': 'Gland Packing Category',
                'sealsupportsystems': 'Seal Support Systems Category',
                'bearingprotectioncategories': 'Bearing Protection Category',
                'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
                'gasseals': 'Gas Seals Category',
                'componentseals': 'Component Seals Category',
            }
        } else if (filterLang == "ru") {
            vidMapping = {
                'industry': 'промышленность',
                'glandpacking': 'Gland Packing Category',
                'sealsupportsystems': 'Seal Support Systems Category',
                'bearingprotectioncategories': 'Bearing Protection Category',
                'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
                'gasseals': 'Gas Seals Category',
                'componentseals': 'Component Seals Category',
            }
        } else if (filterLang == "tr") {
            vidMapping = {
                'industry': 'Sanayi',
                'glandpacking': 'Gland Packing Category',
                'sealsupportsystems': 'Seal Support Systems Category',
                'bearingprotectioncategories': 'Bearing Protection Category',
                'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
                'gasseals': 'Gas Seals Category',
                'componentseals': 'Component Seals Category',
            }
        } else if (filterLang == "zh-hans") {
            vidMapping = {
                'industry': '行业',
                'glandpacking': 'Gland Packing Category',
                'sealsupportsystems': 'Seal Support Systems Category',
                'bearingprotectioncategories': 'Bearing Protection Category',
                'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
                'gasseals': 'Gas Seals Category',
                'componentseals': 'Component Seals Category',
            }
        }
    
    if(!!globeSearch){
        const search = instantsearch({
            indexName: 'aesseal',
            searchClient,
            routing: {
                router: instantsearch.routers.history(),
                stateMapping: {
                    stateToRoute(uiState) {
                        const indexUiState = uiState['aesseal'] || {};

                        return {
                            qs: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language,
                            page: indexUiState.page,
                        };
                    },
                    routeToState(routeState) {
                        return {
                            aesseal: {
                                query: routeState.qs,
                                refinementList: {
                                    type: routeState.type,
                                    lang: routeState.search_api_language
                                },
                                page: routeState.page,
                            }
                        }
                    }
                },
            },
            typoTolerance: 'strict',
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            }
        });

        const langlistPanel = instantsearch.widgets.panel ({
            templates: {
                header: '<h4>Select your Language</h4>'
            },cssClasses: {
                root: 'pt-5'
            }
        })(instantsearch.widgets.refinementList);

        const typelistPanel = instantsearch.widgets.panel ({
            templates: {
                header: '<h4>Filter by Content Type</h4>'
            },
            cssClasses: {
                root: 'pt-3'
            }
        })(instantsearch.widgets.refinementList);

        const pagination = instantsearch.widgets.panel ({
            hidden: ({ results }) => results.nbPages === 1,
        })(instantsearch.widgets.pagination)

        search.addWidgets([{
            init: function(options) {
                if(filterLang == "en")
                {
                    options.helper.toggleRefinement('search_api_language', 'en');
                }
                else if(filterLang == "es")
                {
                    options.helper.toggleRefinement('search_api_language', 'es');
                }
                else if (filterLang === "fr") {
                    options.helper.toggleRefinement('search_api_language', 'fr');
                }
                else if (filterLang === "de") {
                    options.helper.toggleRefinement('search_api_language', 'de');
                }
                else if(filterLang == "it")
                {
                    options.helper.toggleRefinement('search_api_language', 'it');
                }
                else if(filterLang == "pl")
                {
                    options.helper.toggleRefinement('search_api_language', 'pl');
                }
                else if(filterLang == "ru")
                {
                    options.helper.toggleRefinement('search_api_language', 'ru');
                }
                else if(filterLang == "tr")
                {
                    options.helper.toggleRefinement('search_api_language', 'tr');
                }
                else if(filterLang == "zh-hans")
                {
                    options.helper.toggleRefinement('search_api_language', 'zh-hans');
                }
            }
        }]);
        
        search.addWidgets([
            instantsearch.widgets.configure({
                hitsPerPage: 20,
                attributesToSnippet: ['description:80', 'body:80'],
                page: 0,
            }),

            instantsearch.widgets.clearRefinements({
                container: '#clear-refinements',
                cssClasses:{
                    root: 'pt-5',
                    button: [
                        'btn btn-primary text-white'
                    ]
                }
            }),

            langlistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    header: 'Select your Language',
                    item: '<input type="checkbox" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: item.label.toUpperCase(),
                    }));
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    header: 'Filter by Content Type',
                    item: '<input type="checkbox" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),
        
            pagination({
                container: '#pagination',
                totalPages: 3,
                scrollTo: '#searchbox'
            }),
        
            customSearchBox({
                container: document.querySelector('#searchbox'),
                 searchAsYouType: false,
              }),

            instantsearch.widgets.stats({
                container: '#stats',
                templates: {
                    text(data, { html }) {
                        let count = '';
                        if (data.hasManyResults) {
                            count += `${data.nbHits} results`
                        } else if (data.hasOneResult) {
                            count += `1 result`
                        } else {
                            count += `no result`;
                        }

                        return html`<span class="stat-text">${count} found in ${data.processingTimeMS}ms</span>`;
                    }
                }
            }),
        
            instantsearch.widgets.hits ({
                container: '#hits',
                templates:{
                    item: data => `
                    <div class="search-result">
                        <small>${data.url}</small>
                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                        <p class=${data.description ? '' : 'd-none'}>${instantsearch.snippet({
                            attribute: "description",
                            hit: data
                        })}</p>
                        <p class=${data.body ? '' : 'd-none'}>${instantsearch.snippet({
                            attribute: "body",
                            hit: data
                        })}</p>
                        <a class="btn btn-primary align-self-end" href="${data.url}">Read More</a>
                    </div>`,
                    empty: `<p class="h3">No results found matching {{query}}</p>
                    <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>'
                    <p class="h3">Are you searching for a Part Number or Serial Number?</p>`,
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: typeMapping[item.type],
                        vid: vidMapping[item.vid]
                    }))
                }
            })
        ]);
        search.start();
    }

    if(!!usSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const usaSearch = instantsearch({
            indexName: 'aesseal us',
            searchClient,
            typoTolerance: 'strict',
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            }
        })

        const usPagination = instantsearch.widgets.panel ({
            hidden: ({ results }) => results.nbPages === 1,
        })(instantsearch.widgets.pagination)
        
        usaSearch.addWidgets([
            instantsearch.widgets.configure({
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
            }),

            usPagination({
                container: '#usPagination',
                totalPages: 3,
                scrollTo: '#usSearchbox'
            }),
        
            instantsearch.widgets.searchBox({
                container: '#usSearchbox',
                placeholder: 'Enter Your Keywords',
                searchAsYouType: false,
                cssClasses: {
                    form : 'search-block',
                    input: 'form-control',
                    submit: 'btn btn-danger',
                    submitIcon: 'filter-white search-btn'
                }
            }),

            instantsearch.widgets.stats({
                container: '#usStats',
                templates: {
                    text(data, { html }) {
                        let count = '';
                        if (data.hasManyResults) {
                            count += `${data.nbHits} results`
                        } else if (data.hasOneResult) {
                            count += `1 result`
                        } else {
                            count += `no result`;
                        }

                        return html`<span class="stat-text">${count} found in ${data.processingTimeMS}ms</span>`;
                    }
                }
            }),

            instantsearch.widgets.hits ({
                container: '#usHits',
                templates:{
                    item: data => `
                    <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                        <small class="${data.type != "casestudies" ? '' : 'd-none'}">${data.url}</small>
                        <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                        <p class=${data.body ? '' : 'd-none'}>${instantsearch.snippet({
                            attribute: "body",
                            hit: data
                        })}</p>
                        <a class="${data.type != "casestudies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                        <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                    </div>`,
                    empty: `<p class="h3">No results found matching {{query}}</p>
                    <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                    <div class="text-center">
                    <p class="h3">Would you like to search our Global site?</p>
                    <a href="https://www.aesseal.com/en/search" class="btn btn-danger" target="_blank" rel="noopener">Search our Global site</a>
                    </div>`,
                },
            }),
        ]);
        usaSearch.start();
    }
});