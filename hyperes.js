score=localStorage.getItem("Quest")
document.getElementById("score").innerHTML=localStorage.getItem("Scorer")+ " Points"
document.getElementById("Quest").innerHTML="Correct: "+localStorage.getItem("Quest")+ "/7"
document.getElementById("Time").innerHTML="Time Taken: "+Math.round(localStorage.getItem("Time"))+ " sec"


if(score>=6){
document.getElementById("Text").innerHTML="Congrats, You have vast knowledge about Janmashtami 🤩"

}


else if(score>=4){
    document.getElementById("Text").innerHTML="Well done, You have good knowledge about Janmashtami 🥳"
    
    }



    else if(score>=1){
        document.getElementById("Text").innerHTML="No worries, you can improve your knowledge 😉"
        
        }

