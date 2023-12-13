import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Connexion(){
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handelclick =  async () => {
        console.log('form', email, password)    
        const response = await fetch("http://localhost:1337/api/auth/local", {
            headers: new Headers({
              "Content-Type": "application/json"
            }),
            method: "POST",
            body: JSON.stringify({
                "identifier": email,
                "password": password
              }),
        })
        console.log(response)
        const data = await response.json()
        console.log('response auth',data)
        if(!data.error){
            localStorage.setItem('admin', data.token)
            navigate('/home')
        }
     }

    return (
        <div>
            <h1>Connexion</h1>
            <div className="form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handelclick}>Se connecter</button>
            </div>
        </div>
    )
}