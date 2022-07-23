import "./style.css";
import React from "react";

function FooterTemplate({ playCount, linePlays }) {

    return (
        <div className='scoreboard'>
            {/*  <h1></h1>
            <p>Você não esqueceu de nenhum flashcard!</p> */}
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

export default function Footer({ playCount, linePlays }) {
    return (
        <FooterTemplate playCount={playCount} linePlays={linePlays} />
    )
}

