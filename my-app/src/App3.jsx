import { useContext, memo } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProviders";

export const App = memo(() => {

    const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

    console.log("Appレンダリング");

    const onClickSwitch = () => {setIsAdmin(!isAdmin)};

    return (
        <div>
            { isAdmin ? <span>管理者です</span> : <span>管理者以外です</span> }
            <button onClick={ onClickSwitch }>切り替え</button>
            <Card></Card>
        </div>
    )
});