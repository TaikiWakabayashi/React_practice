import { useState, useCallback } from "react";

export const UseMemoList = () => {
  // メモ一覧State
  const [memos, setMemos] = useState<string[]>([]);

  // メモロジック
  const addTodo = useCallback(
    (text: string) => {
      const newMemos: string[] = [...memos];

      newMemos.push(text);

      setMemos(newMemos);
    },
    [memos]
  );

  // メモ削除ロジック
  const deleteTodo = useCallback(
    (index: number) => {
      const newMemos = [...memos];

      newMemos.splice(index, 1);

      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
