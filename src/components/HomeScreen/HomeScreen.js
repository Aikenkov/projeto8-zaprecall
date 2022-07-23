import React from "react"
import "./style.css"
import logo from "../assets/img/logo.png"



export default function HomeScreen({ setScreen, screen }) {

    return (
        <>
            <div className="home-screen">
                <img alt="ixi" src={logo} />
                <h1>ZapRecall</h1>
                <div onClick={() => setScreen(!screen)}>Iniciar Recall!</div>
            </div>
        </>
    )
}