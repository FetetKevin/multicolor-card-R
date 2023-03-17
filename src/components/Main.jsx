import Card from "./Card";
import Data from "../Api";
import { useState } from "react";

export default function Main(props) {
    const [data, setData] = useState(Data);


    const myCards = data.map((el) => (
        <Card key={el.id} color={props.color} data={el} />
    ));
    return (
        <main className={props.darkMode ? "dark" : ""}>
            {myCards}
            {myCards}
        </main>
    );
}
