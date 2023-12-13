export default function Home() {
    const jwt = localStorage.getItem('jwt')

    return (
        <div>
            <h1>Home</h1>
            <div className="connected-status">
                Je suis connecté
            </div>
            <div className="connected-data">
                <div className="title">jwt :</div>
                <div className="value">{jwt}</div>
            </div>
        </div>
    )
}