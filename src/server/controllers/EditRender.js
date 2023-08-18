import React from "react";

import { renderToString } from "react-dom/server";

import App from "../../client/App";

export default class EditRender {
    render(url, store) {
        const html = renderToString(<App location={url} store={store} />);
        return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
                <title>Edit </title>
        
                <link rel="stylesheet" href="/style.css" />

                <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, "\\u003c")}
                </script>

                <script src="/bundle.js" defer></script>
            </head>
            <body>
                <div id="root">${html}</div>
                
            </body>
        </html>
        `;
    }
}
