import HomeScreen from './HomeScreen'

export default function App() {
    return (
        <>
            <HomeScreen />
            <div className='game-screen'>
                <div>
                    <img src="../assets/img/logo.png" />
                    <h1>ZapRecall</h1>
                </div>
                <div>0/4 CONCLUÍDOS</div>
            </div>
        </>
    )
}