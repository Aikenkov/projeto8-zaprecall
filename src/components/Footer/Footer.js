import "./style.css";
import React from "react";


function FooterTemplate({ playCount }) {

    return (
        <div className='scoreboard'>
            <h3>{playCount}/4 CONCLUÍDOS</h3>
            <div>aiai</div>
        </div>
    )
}

export default function Footer({ playCount }) {
    return (
        <FooterTemplate playCount={playCount} />
    )
}

