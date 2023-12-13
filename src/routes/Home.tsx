import { useEffect } from "react"

export default function Home() {
    const jwt = localStorage.getItem('jwt')

    useEffect(() => {
        const checkToken = async () => {
            const response = await fetch("http://localhost:1337/api/users/me", {
                headers: new Headers({
                  "Content-Type": "application/json",
                  'Authorization': "Bearer " + jwt
                }),
                method: "GET",
            })
            console.log(response)
            const data = await response.json()
            console.log('response auth',data)
        }
        checkToken()
    })

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