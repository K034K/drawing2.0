import React from "react";

import { renderToString } from "react-dom/server";

import Show from "../../client/containers/Show";

//server side rendering for user's grid on request

export default class Render {
    render(width, grid) {
        const html = renderToString(<Show width={width} grid={grid} />);
        return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
                <title>Drawing</title>
        
                <link rel="stylesheet" href="/style.css" />

            </head>
            <body>
                <div class="app" >${html}</div>
            </body>
        </html>
        `;
    }
}
