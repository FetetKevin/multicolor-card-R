import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function Index() {
    return <App />;
}

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);
