const deck = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
    },
    {
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula",
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões",
    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
        question: "Usamos o npm para __ ",
        answer: "Usamos o npm para __ ",
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes",
    },
    {
        question: "Usamos estado (state) para __ ",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
]



export default function GameScreen() {
    /* const [initial, setInitial] = React.useState("home-screen, hidden") */
    return (
        <>
            <div className='game-screen'>
                <div>
                    <img src="../assets/img/logo.png" />
                    <h1>ZapRecall</h1>
                </div>
                <div className='question'>
                    <h2>Pergunta 1</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className='question'>
                    <h2>Pergunta 1</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className='question'>
                    <h2>Pergunta 1</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className='question'>
                    <h2>Pergunta 1</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
            <div className='scoreboard'>0/4 CONCLUÍDOS</div>
        </>
    )
}