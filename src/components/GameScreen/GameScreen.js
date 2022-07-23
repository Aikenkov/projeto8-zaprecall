import React from "react";
import "./style.css";
import logo from "../assets/img/logo.png"
import Questions from "../Questions/Questions";
import Footer from "../Footer/Footer";




export default function GameScreen() {
    const [playCount, setPlayCount] = React.useState(0);
    const [mistakesCount, setMistakesCount] = React.useState(0);
    const lineplays = []
    return (
        <>
            <div className='game-screen'>
                <div>
                    <img alt="ixi" src={logo} />
                    <h1>ZapRecall</h1>
                </div>

                <Questions
                    playCount={playCount}
                    setPlayCount={setPlayCount}
                    mistakesCount={mistakesCount}
                    setMistakesCount={setMistakesCount} />
            </div>

            <Footer playCount={playCount} />
        </>
    )
}