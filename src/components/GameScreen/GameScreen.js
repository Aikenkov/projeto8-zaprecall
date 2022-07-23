import React from "react";
import "./style.css";
import logo from "../assets/img/logo.png"
import Questions from "../Questions/Questions";
import Footer from "../Footer/Footer";




export default function GameScreen() {
    const [playCount, setPlayCount] = React.useState(0);
    const [mistakes, setMistakes] = React.useState(0);
    const [linePlays, setLinePlays] = React.useState([]);

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
                    mistakes={mistakes}
                    setMistakes={setMistakes}
                    linePlays={linePlays}
                    setLinePlays={setLinePlays}
                />
            </div>

            <Footer
                playCount={playCount}
                linePlays={linePlays}
                mistakes={mistakes}
            />
        </>
    )
}