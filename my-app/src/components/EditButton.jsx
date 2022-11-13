import { useContext, memo } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProviders";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px"
};

export const EditButton = memo(() => {

    console.log("Editレンダリング");

    const { isAdmin } = useContext(AdminFlagContext);

    return (
        <button style={ style } disabled={ !isAdmin }>編集</button>
    )
}); 