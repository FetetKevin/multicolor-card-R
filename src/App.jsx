import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
    const [color, setColor] = useState("red");
    const [darkMode, setDarkMode] = useState(false);

    const changeColor = (e) => {
        const el = e.target;
        const color = el.getAttribute("data-value");
        setColor(color);
    };

    return (
        <div className={
            color === "red"
                ? "container red"
                : color === "blue"
                ? "container blue"
                : "container purple"
        }>
            <Header
                color={color}
                changeColor={changeColor}
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode((state) => !state)}
            />
            <Main 
                darkMode={darkMode} 
                color={color} 
            />
        </div>
    );
}
