import React,{useState,useContext} from "react" 
import UserContext from "../context/UserContext"
//THIS IS ABOUT TO SEND DATA
function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {                    //(e) is known as handle submit


        e.preventDefault()
         //by default jb b hm submit krte h to value khi na khi chli jati h ya fir post method ke through chli jati h to usko prevent krne ke lie ye use hua h
         setUser({username,password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text"
             value={username} 
             onChange={(e) => setUsername(e.target.value)}
              placeholder="username"/>
            {"     "}
            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>  
      </div>
    )
}

export default Login