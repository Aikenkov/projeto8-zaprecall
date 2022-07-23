import React from "react";
import "./style.css";
import setinha from "../assets/img/setinha.png"

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


function TemplateQuestion({ question, answer, index }) {
    const [flesh, setFlesh] = React.useState(true);
    const [isOpen, setIsOpen] = React.useState(false);
    const [answerClass, setAnswerClass] = React.useState("answer-box zap-box hidden");
    const [questionClass, setQuestionClass] = React.useState("zap-box");
    const [cardClass, setCardClass] = React.useState("card");
    const [closedQuest, setClosedQuest] = React.useState("question");
    const [iconName, setIconName] = React.useState("play-outline");

    function openQuest() {
        if (!isOpen) {
            setIsOpen(!isOpen);
            setFlesh(!flesh);
        }
    }
    function turnCard() {
        setCardClass("card turn")
        setQuestionClass("zap-box hidden")
        setAnswerClass("answer-box zap-box ")
    }

    function choice(color) {
        setFlesh(!flesh);

        if (color === "red") {
            setClosedQuest(`question ${color}`)
            setIconName("close-circle")
        }
        if (color === "yellow") {
            setClosedQuest(`question ${color}`)
            setIconName("help-circle")
        }
        if (color === "green") {
            setClosedQuest(`question ${color}`)
            setIconName("checkmark-circle")
        }
    }


    return (
        <>
            <div>
                {flesh ? (
                    <div className={closedQuest}>
                        <h2>Pergunta {index + 1}</h2>
                        <ion-icon onClick={() => openQuest()} name={iconName}></ion-icon>
                    </div>
                ) : (
                    <div className={cardClass}>
                        <div className={questionClass}>
                            <p>
                                {question}
                            </p>
                            <img onClick={() => turnCard()} alt='setinha' src={setinha} />
                        </div>
                        <div className={answerClass}>
                            <p>
                                {answer}
                            </p>
                            <div className="buttons">
                                <button onClick={() => choice("red")}>Não lembrei </button>
                                <button onClick={() => choice("yellow")} >Quase não lembrei</button>
                                <button onClick={() => choice("green")}>Zap!</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}


export default function Questions({ playCount }) {
    questions.sort(random)
    return (
        <div className="questions">
            {questions.map((item, index) => {
                if (index < 4) {
                    return (
                        <TemplateQuestion index={index} key={index} question={item.question} answer={item.answer} />
                    )
                }
            })}
        </div>
    )
}