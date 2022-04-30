
let end_time=new Date()
end_time.setMonth('3');
end_time.setDate('30');
end_time.setHours('23');
end_time.setMinutes('59');
end_time.setSeconds('59');


let countdown=function(){
    let nowDate= new Date()

    let remainTime=end_time-nowDate;
    console.log(remainTime);
    console.log(nowDate);
    console.log(end_time);


    let secoundTime=Math.floor(remainTime/1000)%60//秒の計算
    let minutesTime=Math.floor(remainTime/1000/60)%60//分の計算
    let hourTime=Math.floor(remainTime/1000/60/60)%24//時間の計算
    let dayTime=Math.floor(remainTime/1000/60/60/24);//日の計算

    let countTime=[dayTime,hourTime,minutesTime,secoundTime]

    return countTime;
}




//秒のカウントダウン
let recalc =function(){
    let count_txt=countdown(end_time);



    if(count_txt[0]<=9){
        count_txt[0]='0'+count_txt[0];
    }
    if(count_txt[1]<=9){
        count_txt[1]='0'+count_txt[1];
    }
    if(count_txt[2]<=9){
        count_txt[2]='0'+count_txt[2];
    }
    if(count_txt[3]<=9){
        count_txt[3]='0'+count_txt[3];
    }

    document.getElementById('time_d').textContent=count_txt[0]
    document.getElementById('time_h').textContent=count_txt[1]
    document.getElementById('time_m').textContent=count_txt[2]
    document.getElementById('time_s').textContent=count_txt[3]



    setTimeout(recalc,1000);
}


/* if(count_txt[3]<=10){
    countdown_image.classList.add('a');
}else if(11<=count_txt[3]&&count_txt[3]>=20){
    countdown_image.classList.add('b');
}else if(21<=count_txt[3]&&count_txt[3]>=30){
    countdown_image.classList.add('c');
}else if(31<=count_txt[3]&&count_txt[3]>=40){
    countdown_image.classList.add('d');
}else if(41<=count_txt[3]&&count_txt[3]>=50){
    countdown_image.classList.add('e');
}else if(51<=count_txt[3]){
    countdown_image.classList.add('f');
} */


recalc();









