import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const jwt = localStorage.getItem('admin')
    const navigate = useNavigate()
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
            if(response.status === 401){
                navigate('/')
            }
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