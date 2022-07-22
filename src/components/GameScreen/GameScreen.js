
import "./style.css";
import logo from "../assets/img/logo.png"


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


let questions = [...deck];

function random() {
    return Math.random() - 0.5;
}

function createlist() {
    questions = [...deck]
    questions.sort(random)
    for (let i = 0; questions.length > 4; i++) {
        questions.pop()
    }
}

createlist()

function TemplateQuestion({ question, answer, index }) {

    return (
        <>
            <div>
                <div className='question '>
                    <h2>Pergunta {index + 1}</h2>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div>
                    {/*  <div>
                        <p>
                            {question}
                        </p>
                    </div>
                    <div>
                        <p>
                            {answer}
                        </p>
                        <div>

                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}



export default function GameScreen() {
    /* const [initial, setInitial] = React.useState("home-screen, hidden") */

    return (
        <>
            <div className='game-screen'>
                <div>
                    <img alt="ixi" src={logo} />
                    <h1>ZapRecall</h1>
                </div>

                <div className="questions">
                    {questions.map((item, index) => (
                        <TemplateQuestion index={index} key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>

            <div className='scoreboard'><h3>0/4 CONCLUÍDOS</h3></div>
        </>
    )
}