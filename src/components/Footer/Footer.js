import "./style.css";
import React from "react";
import parabeinx from "../assets/img/party-2.png"
import putz from "../assets/img/sad-7.png"


function FooterTemplate({ playCount, linePlays, mistakes }) {

    if (playCount === 4 && mistakes === 0) {

        return (
            <div className='scoreboard'>
                <div className="result">
                    <img alt="Parabéns!" src={parabeinx} />
                    <h1>Parabéns!</h1>
                </div>
                <p>Você não esqueceu de nenhum flashcard!</p>
                <h3>{playCount}/4 CONCLUÍDOS</h3>
                <div>
                    {linePlays.map((item, index) => {
                        return (
                            <ion-icon key={index} name={item.name}></ion-icon>
                        )
                    })}
                </div>
            </div>
        )
    }

    if (playCount === 4 && mistakes > 0) {

        return (
            <div className='scoreboard'>
                <div className="result">
                    <img alt="Putz..." src={putz} />
                    <h1>Putz...</h1>
                </div>
                <p>Ainda faltam alguns... Mas não desanime!</p>
                <h3>{playCount}/4 CONCLUÍDOS</h3>
                <div>
                    {linePlays.map((item, index) => {
                        return (
                            <ion-icon key={index} name={item.name}></ion-icon>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className='scoreboard'>

            <h3>{playCount}/4 CONCLUÍDOS</h3>
            <div>
                {linePlays.map((item, index) => {
                    return (
                        <ion-icon key={index} name={item.name}></ion-icon>
                    )
                })}
            </div>
        </div>
    )
}

export default function Footer({ playCount, linePlays, mistakes }) {
    return (
        <FooterTemplate
            playCount={playCount}
            linePlays={linePlays}
            mistakes={mistakes}
        />
    )
}

