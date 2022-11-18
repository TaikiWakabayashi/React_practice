import { FC } from "react";

type Props = {
    memos: string[];
    onClickDelete: (index: number) => void;
}

export const MemoList: FC<Props> = (props) => {

    const {memos, onClickDelete } = props;

    return (
        <div className="border border-solid border-blue-500 m-1.5">
            <p>メモ一覧</p>
            <ul>
                {memos.map((memo, index) => (
                    <li key={memo}>
                        <div className="flex items-centers">
                            <p>{memo}</p>
                            <button className="ml-4" onClick={ () => onClickDelete(index)}>削除</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}