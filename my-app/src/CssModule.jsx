import classes from "./CSS/CssModule.module.scss"
import classes2 from "./CSS/CssModule2.module.scss"
import { Fragment } from "react"

export const CssModule = () => {
    return (
        <Fragment>
            <div className={ classes.container }>
                <p className={ classes.title }>CssModuleです</p>
                <button className={ classes.button }>ボタン</button>
            </div>
            <div className={ classes2.container }>
                <p className={ classes2.title }>CssModuleです</p>
                <button className={ classes2.button }>ボタン</button>
            </div>
        </Fragment>
    )
}