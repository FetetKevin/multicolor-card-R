import logo from "../assets/react.svg";

export default function Header(props) {
    return (
        <header
            className={[
                props.color === "red"
                    ? "red"
                    : props.color === "blue"
                    ? "blue"
                    : props.color,

                props.darkMode ? "dark" : "",
            ].join(" ")}
        >
            <img className="logo" src={logo} alt="" />
            <h1 className="title">My Multicolor Card</h1>
            <div
                className="red-btn btn"
                onClick={props.changeColor}
                data-value="red"
            ></div>
            <div
                className="blue-btn btn"
                onClick={props.changeColor}
                data-value="blue"
            ></div>
            <div
                className="purple-btn btn"
                onClick={props.changeColor}
                data-value="purple"
            ></div>

            <div 
                className="toggler-slider" 
                onClick={props.toggleDarkMode}
            >
                <div className="toggler-circle"></div>
            </div>
        </header>
    );
}
