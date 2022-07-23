import React from "react";
import GameScreen from './GameScreen/GameScreen'
import HomeScreen from './HomeScreen/HomeScreen'
import "./assets/CSS/reset.css"
import "./assets/CSS/style.css"

export default function App({ }) {
    const [screen, setScreen] = React.useState(false); //trocar para true na hora de testar projeto

    return (
        <>
            {screen ? (
                <HomeScreen setScreen={setScreen} screen={screen} />
            ) : (
                <GameScreen />
            )}
        </>
    )
}