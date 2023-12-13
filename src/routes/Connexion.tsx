import { useState } from "react"

export default function Connexion(){
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div>
            <h1>Connexion</h1>
            <div className="form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button>Se connecter</button>
            </div>
        </div>
    )
}