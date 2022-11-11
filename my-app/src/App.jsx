import { Fragment } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { CssModules } from "./CSS/CssModules";

export const App = () => {

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1);
    }

    return (
        <Fragment>
            <h1>こんにちは</h1>
            <ColoredMessage color="blue">元気ですか</ColoredMessage>
            <ColoredMessage color="pink">元気です</ColoredMessage>
            <button onClick={ onClickButton }>ボタン</button>
            <p>{ num }</p>
            <br/>
            <ColoredMessage></ColoredMessage>
        </Fragment>
    )
}