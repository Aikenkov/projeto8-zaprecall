import React from "react";
import "./style.css";
import logo from "../assets/img/logo.png"
import Questions from "../Questions/Questions";
import Footer from "../Footer/Footer";




export default function GameScreen() {
    const [playCount, setPlayCount] = React.useState(0);

    return (
        <>
            <div className='game-screen'>
                <div>
                    <img alt="ixi" src={logo} />
                    <h1>ZapRecall</h1>
                </div>

                <Questions />
            </div>

            <Footer />
        </>
    )
}