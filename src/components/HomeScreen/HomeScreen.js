import React from "react"
import "./style.css"
import logo from "../assets/img/logo.png"


export default function HomeScreen() {
    const [initial, setInitial] = React.useState("home-screen hidden")
    return (
        <>
            <div className={initial}>
                <img alt="ixi" src={logo} />
                <h1>ZapRecall</h1>
                <div onClick={() => setInitial("hidden")}>Iniciar Recall!</div>
            </div>
        </>
    )
}