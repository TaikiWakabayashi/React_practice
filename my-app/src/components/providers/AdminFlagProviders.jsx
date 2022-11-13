import { createContext, useState, memo } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = memo((props) => {

    const { children } = props;

    console.log("contextレンダリング");

    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
            { children }
        </AdminFlagContext.Provider>
    );
});