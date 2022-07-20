import React from "react"

export default function HomeScreen() {
    const [initial, setInitial] = React.useState("home-screen, hidden")
    return (
        <>
            <div className={initial}>
                <img src="../assets/img/logo.png" />
                <h1>ZapRecall</h1>
                <div onClick={() => setInitial("hidden")}>Iniciar Recall!</div>
            </div>
        </>
    )
}