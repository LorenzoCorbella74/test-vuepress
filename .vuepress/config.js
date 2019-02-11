module.exports = {
    title: 'Appunti su VuePress',
    description: 'Just playing around',
    search: false,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean
    displayAllHeaders: true, // Default: false
    themeConfig: {
        updatePopup: true, // Boolean | Object, default to undefined.
        // If set to true, the default text config will be: 
        // updatePopup: { 
        //    message: "New content is available.", 
        //    buttonText: "Refresh" 
        // }
        // non si specifica l'estensione del .md
        sidebar: [{
                title: 'Group 2',
                children: [
                    '/',
                    '/nuovo'
                ]
            },
            {
                title: 'Group 1', // required
                //path: '/guide/',  NON FUNZIONA!!
                children: [
                    '/guide/',
                    '/guide/primo'
                ]
            },
        ],
        nav: true, // se = a false toglie sia navbar che sidebar !!!
        nav: [{
                text: 'Home',
                link: '/nuovo'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                link: 'https://google.com'
            },
        ]
    }
}