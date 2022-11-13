import { useState, memo, useCallback } from "react";
import { useEffect } from "react";
import{ Child1 } from "./components/Child1";
import{ Child4 } from "./components/Child4";

export const App2 = memo(() => {
    console.log("Appレンダリング");

    const [num, setNum] = useState(0);

    let resetFlag = false;

    const onClickButton = () => {
        setNum(num +1);
    };

    const onClickReset = useCallback(() => {
        resetFlag = true;
        setNum(0);
    }, []);

    const changeResetFlag = () => {
        return resetFlag === false ? resetFlag = true : resetFlag;
    }

    /**
     * ボタン・リセットを押すたびにアラートが出力（再レンダリング）されているが、"Appレンダリング"のコンソールが出力されていないので、
     * useEffectの中だけが再レンダリングされているのがわかる。
     */
    useEffect(() => {
        if(num === 0) {

            changeResetFlag();

            if(resetFlag) {
                alert("数字がリセットされました。");
                resetFlag = false;
            } else {
                alert("ボタンを押して数字を増やしてみましょう");
            }
        } else {
            alert(`ボタンを${num}回押しました。`);
        }
    },[num]);

    return (
        <>
            <button onClick={ onClickButton }>ボタン</button>
            <p>{num}</p>
            <Child1 onClickReset={ onClickReset }></Child1>
            <Child4></Child4>
        </>
    );
});