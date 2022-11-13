import classes from "./CssModules.module.scss"
import classes2 from "./CssModule2.module.scss"
import { Fragment } from "react"

export const CssModules = () => {
    return (
        <Fragment>
            <div className={ classes.container }>
                <p className={ classes.title }>Css Moduleです</p>
                <button className={ classes.button }>ボタン</button>
            </div>
            <div className={ classes2.container }>
                <p className={ classes2.title }>Css Moduleです</p>
                <button className={ classes2.button }>ボタン</button>
            </div>
        </Fragment>
    )
}