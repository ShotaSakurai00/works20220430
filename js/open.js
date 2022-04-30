let countdown_id =document.getElementById('countdown');//表示させるdivのID取得
let nowDate= new Date();//現在の日時を取得
let nowDays= nowDate.getDate()//日取得
let nowmonth=nowDate.getMonth()//月取得

let Day = [nowDays,nowmonth]

let opendays=21 //22日に解禁
let openmonth=3 //4月に解禁

if(opendays<=nowDays&&nowmonth==openmonth){
    countdown_id.classList.add('open');
}
    
console.log(Day);
console.log(nowDays);
console.log(nowmonth);


let alert_final_op=30 //30日に最終日
let alert_a_op=29 //29日にあと1日
let alert_b_op=28 //28日にあと2日
let alert_c_op=27 //27日にあと3日

let alert_final=document.getElementById('alert_final');
let alert_a=document.getElementById('alert_a');
let alert_b=document.getElementById('alert_b');
let alert_c=document.getElementById('alert_c');

if(nowDays==alert_c_op){
    alert_c.classList.add('open');
}else if(nowDays==alert_b_op){
    alert_b.classList.add('open');
}else if(nowDays==alert_a_op){
    alert_a.classList.add('open');
}else if(nowDays==alert_final_op){
    alert_final.classList.add('open');
}
