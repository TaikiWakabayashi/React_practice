import ReactDOM from "react-dom";
// import { App } from "./App"
// import { App2 } from "./App2";
import { App } from "./App3";
import {AdminFlagProvider} from "./components/providers/AdminFlagProviders"

ReactDOM.render (
    <AdminFlagProvider>
        <App />
    </AdminFlagProvider>, 
    document.getElementById("root")
    );