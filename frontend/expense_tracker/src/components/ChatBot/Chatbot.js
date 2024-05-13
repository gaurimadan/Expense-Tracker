import React, { useState } from 'react'

import axios from "axios";
import "./Chatbot.css";

function Chatbot() {
    const[ques,setQues]=useState("");
    const[ans,setAns]=useState("");
    const [showTextarea, setShowTextarea] = useState(false);
     async function generateAnswer(){
        setAns("loading");
       const Response= await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDHPvFPExvnQ7u8TcxYIW93flCKe7JkY4o",
            method:"post",
            data:{"contents":[{"parts":[{"text":ques}]}]}
        })
        setAns(Response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
        setShowTextarea(true);
    }



   return(
    
        <div className="chatbot-container">
            
            {!showTextarea && (
                <button className="chatbot-button" onClick={generateAnswer}>Chat with us</button>
            )}
            {showTextarea && (
                <>
                    <textarea className="chatbot-textarea" value={ques} onChange={(e) => setQues(e.target.value)} cols="30" rows="5"></textarea>
                    <button className="chatbot-button" onClick={generateAnswer}>Answer</button>
                </>
            )}
            <p className="chatbot-answer">{ans}</p>
        </div>
    )
}


export default Chatbot
