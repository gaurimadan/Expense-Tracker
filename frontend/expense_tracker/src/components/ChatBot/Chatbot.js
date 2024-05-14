import React, { useState } from 'react'
import axios from "axios";
import "./Chatbot.css";
import Index from '../Sidebar/Index';

function Chatbot() {
    console.log(process.env.REACT_APP_GEN_AI_KEY)
    const[ques,setQues]=useState("");
    const[ans,setAns]=useState("");
    const [showTextarea, setShowTextarea] = useState(false);
     async function generateAnswer(){
        setAns("loading");
       const Response= await axios({
            url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEN_AI_KEY}`,
            method:"post",
            data:{"contents":[{"parts":[{"text":ques}]}]}
        })
        
       
        if(ans!="")
            { setAns(Response["data"]["candidates"][0]["content"]["parts"][0]["text"]);}
        setShowTextarea(true);
    }
    console.log(ans)


   return(
        <>
         <div className="chatbot-container">
            
            {!showTextarea && (
                <button className="chatbot-button" onClick={()=>setShowTextarea(true)}>Chat with us</button>
            )}
            
           
            
        </div>
             {showTextarea && (
                <>
                    <Index onClick={showTextarea}> <textarea className="chatbot-textarea" value={ques} onChange={(e) => setQues(e.target.value)} cols="30" rows="5"></textarea>
                    <button className="chatbot-button" onClick={generateAnswer}>Answer</button><p className="chatbot-answer">{ans}</p></Index>
                   
                </>
            )}
        </>
    
       
    )
}


export default Chatbot
