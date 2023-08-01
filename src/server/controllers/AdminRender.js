import React from "react";

import { renderToString } from "react-dom/server";

import Admin from "../../admin/Admin";

export default class AdminRender {
    
    render(db) {
        const html = renderToString(<Admin db={db} />);
        return`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
                <title>Admin</title>
        
                <link rel="stylesheet" href="style.css" />
        
            </head>
            <body>
                <div id="admin">${html}</div>
            </body>
        </html>
        `;
    }
}
