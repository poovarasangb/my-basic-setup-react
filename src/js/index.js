import "scss/init.scss";

import { createRoot } from 'react-dom/client';

import { App } from "js/app";
import React from "react";

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);
document.title = 'React basic setup';

const root = createRoot(mainElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
