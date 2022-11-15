import { useFetchUsers } from "./hooks/useFetchUser";

export const App = () => {

    const {userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

    return (
        <div>
            <button onClick={ onClickFetchUser }>ユーザー取得</button>

            {/* エラーの場合はエラーメッセージを表示 */}
            { isError && <p style={{ color: "red"}}>エラーが発生しました。</p> }

            {/* ローディング中は表示を切り替える */}
            { isLoading ? (
                <p>データを取得中です。</p>
            ) : (
                userList.map(user => (
                    <p key={user.id}>{`${user.lastName} ${user.firstName} (${user.age}歳)`}</p>
                ))
            )}
        </div>
    );
};