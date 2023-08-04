import React from "react";

import { renderToString } from "react-dom/server";

import App from "../../client/App";

export default class AdminRender {
    render(url, preloadedState) {
        const html = renderToString(<App location={url} />);
        return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
                <title>Admin</title>
                <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
        </script>
                <link rel="stylesheet" href="style.css" />
        
            </head>
            <body>
                <div id="admin">${html}</div>
            </body>
        </html>
        `;
    }
}
