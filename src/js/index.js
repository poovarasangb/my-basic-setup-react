import "scss/init.scss";

import { createRoot } from "react-dom/client";
import React from "react";

import { App } from "./app";
import NavBar from "./component/navBar";

const mainElement = document.createElement("main");
document.body.appendChild(mainElement);
document.title = "React basic setup";
const root = createRoot(mainElement);

root.render(
    <React.StrictMode>
        <NavBar />
        <App />
    </React.StrictMode>
);
