import { FC, ChangeEvent } from "react";


type inputAreaProps = {
    text: string;
    onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickAdd: () => void;
}

export const InputArea: FC<inputAreaProps> = (props) => {

    const {text, onChangeText, onClickAdd } = props;
    return (
        <>
        <input type="text" value={text} onChange={onChangeText}></input>
            <button className="ml-4" onClick={onClickAdd}>追加</button>
        </>
    )
}