import { FC, ChangeEvent, useState, useCallback } from "react";
import { MemoList } from "./components/MemoList";
import { UseMemoList } from "./hooks/useMemoList";
import { InputArea } from "./components/InputArea";


export const App: FC = () => {

    // テキストボックスのState
  const [text, setText] = useState<string>("");
  
  // メモ一覧カスタムフック
  const { memos, addTodo, deleteTodo } = UseMemoList();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickAdd = () => {
    addTodo(text);
    setText("");
  }

  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  }, [deleteTodo]);

    return (
        <div>
            <h1>簡単メモアプリ</h1>
            <InputArea text={text} onClickAdd={onClickAdd} onChangeText={onChangeText}></InputArea>
            <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
        </div>
    );
};