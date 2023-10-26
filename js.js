let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");  // Korrekter Name
let TimerBtn = document.querySelector("button");
let timer = [0, 0, 50];
let body = document.querySelector("body");
let divForTimer = document.createElement("div");
let h1ForTimer = document.createElement("h1");
body.append(divForTimer);
divForTimer.append(h1ForTimer);



TimerBtn.onclick = function(){
    timerfunc();
    setInterval(timerfunc, 1000);
    divForTimer.classList.add("timerdiv");
    
    TimerBtn.remove();


    
    
}

settime();
setInterval(settime, 1000);  // Korrekte Syntax

function settime() {
    let date = new Date();
    let datehours = date.getHours();
    let dateminutes = date.getMinutes();
    let dateseconds = date.getSeconds()+1;

    let newdate = [datehours, dateminutes, dateseconds];
    for(let time of newdate){ 
        if(time < 10){
            newdate[newdate.indexOf(time)] = "0"+time;
        }
        
    };
    // h1ForTimer.textContent = `TIMER: ${timer.join(":")}`;
    


    
    hour.textContent = newdate[0];
    minute.textContent = newdate[1];
    second.textContent = newdate[2];

}


function timerfunc(){
    let timer1 = [...timer];
    timer1.forEach(j => {
        if(j<=9){
            let a = "0"+j;
            timer1[timer1.indexOf(j)] = a;
            
        };
        
    }
    );
    console.log(timer1);
    timer[2]++
    if(timer[2]>=60){
        timer[1]++;
        timer[2] = 0;
        if(timer[1]>=60){
            timer[0]++;
            timer[1] = 0;
        };

    };
    

    h1ForTimer.textContent = `Timer: ${timer1.join(":")}`;

}
