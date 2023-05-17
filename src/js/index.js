import "scss/init.scss";

import { createRoot } from "react-dom/client";
import React from "react";

// import { App } from "./app";
import Seats from "./component/seats";

const mainElement = document.createElement("main");
document.body.appendChild(mainElement);
document.title = "React basic setup";
const root = createRoot(mainElement);

root.render(
    <React.StrictMode>
        {/* <App /> */}
        <Seats />
    </React.StrictMode>
);
