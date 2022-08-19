
database=firebase.database();
named=""
ko=0

database.ref("/Users/users").on('value',function(data){
    ko=data.val()
    
ko=Math.max(Math.floor(Math.log10(Math.abs(ko))), 0) + 11;

named = window.location.search.slice(ko).replaceAll("%20"," ");
users= window.location.search.slice(4,ko-6).replaceAll("%20"," ");
document.getElementById("names").innerHTML=named + ", Are You Ready ?";
})
document.getElementById("time").style.width="70%"
width= 70;
time=false;
t=0;
t1=0;
t2=0;
t3=0;
t4=0;
t5=0;
t6=0;
t7=0;
st=0;


document.getElementById("circle").onclick= function(){
    document.getElementById("start").style.display="none";
    document.getElementById("main").style.display="block";

    time=true;
    
}
s=setInterval(function(){
    if(time){
    t+=0.1

    if(t>0.2){
    width-=0.1166667
    document.getElementById("time").style.width=(width)+"%";
    }
    }
    if(t>=60){
        document.getElementById("is").style.pointerEvents="none";
    
    scorer *= 100;
    scorer = Math.round(scorer)
    console.log(scorer)
    localStorage.setItem("Scorer",scorer)
    localStorage.setItem("Quest",st)
    localStorage.setItem("Time",t)
    a = new Date();
    a=a.toString();
    a=a.slice(0,24)
    database.ref("/Users/users").on('value',function(data){users=data.val()})

    database.ref("/Players/"+users+". "+named+", "+a).set({
        Score:scorer,
        Ques:st,
        Time:t,
        Name:named
        
    })
    window.open("results.html")
    clearInterval(s)
    }
},100)
scorer=0;
function submitq1(opt){
    if(opt=="a"){
        scorer++
        st++
        if(7-t>0){
        scorer+=(7-t);
        }
    }
    
    t=t1;
    console.log(t1);
q2();
}

function submitq2(opt){
    if(opt=="c"){
        scorer++
        st++
        if(7-t-t1>0){
        scorer+=(7-t-t1);
        }
    }
    
    t2 = t-t1
    console.log(t2);
q3();
    
}

function submitq3(opt){
    if(opt=="a"){
        scorer++
        st++
        if(7-t-t1-t2>0)
        scorer+=(7-t-t1-t2);
    }
    
    t3 = t-t1-t2

    console.log(t3);
q4();
    
}

function submitq4(opt){
    if(opt=="d"){
        scorer++
        st++
        if(7-t-t1-t2-t3>0)
        scorer+=(t-t1-t2-t3);

    }
    
    t4 = t-t1-t2-t3

    console.log(t4);
q5();
    
}

function submitq5(opt){
    if(opt=="a"){
        scorer++
        st++
        if(7-t-t1-t2-t3-t4>0)
        scorer+=(t-t1-t2-t3-t4);

    }
    
    t5 = t-t1-t2-t3-t4
    console.log(t5);
q6();
}

function submitq6(opt){
    if(opt=="c"){
        scorer++
        st++
        if(7-t-t1-t2-t3-t4-t5>0)
        scorer+=(t-t1-t2-t3-t4-t5);

    }
    
    t6 = t-t1-t2-t3-t4-t5

    console.log(t6);
q7();
    
}

function submitq7(opt){
    document.getElementById("is").style.pointerEvents="none";
    if(opt=="b"){
        scorer++
        st++
        if(7-t-t1-t2-t3-t4-t7-t6>0)
        scorer+=(t-t1-t2-t3-t4-t7-t6);
       
    }
    t7 = t-t1-t2-t3-t4-t7-t6

    console.log(t7);
    scorer *= 100;
    scorer = Math.round(scorer)
    console.log(scorer)
    clearInterval(s)
    localStorage.setItem("Scorer",scorer)
    localStorage.setItem("Quest",st)
    localStorage.setItem("Time",(t7+t6+t5+t4+t3+t2+t1))
    a = new Date();
    a=a.toString();
    a=a.slice(0,24)
    database.ref("/Users/users").on('value',function(data){users=data.val()})

    database.ref("/Players/"+users+" "+named+", "+a).set({
        Score:scorer,
        Ques:st,
        Time:(t7+t6+t5+t4+t3+t2+t1),
        Name:named
        
    })
    window.open("results.html")
}

function q2(){
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="block";

}

function q3(){
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="block";

}


function q4(){
    document.getElementById("q3").style.display="none";
    document.getElementById("q4").style.display="block";

}


function q5(){
    document.getElementById("q4").style.display="none";
    document.getElementById("q5").style.display="block";

}


function q6(){
    document.getElementById("q5").style.display="none";
    document.getElementById("q6").style.display="block";

}


function q7(){
    document.getElementById("q6").style.display="none";
    document.getElementById("q7").style.display="block";

}