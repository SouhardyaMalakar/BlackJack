// let student ={
//     first:"rafe",
//     last:'lol',
//     age: 14,
//     height:180,
//     studehtInfo: function (){
//         return this.first + '\n' +this.last;
//     }
// };
// console.log(student.first);
// student.first='notRafe';
// console.log(student.studehtInfo()); OOP
// let age =prompt('WHATS YOUR AGE?');
// if ((age>=18) && (age<= 35)){
//     status='target demo';
//     console.log(status);
// }
// else{
//     console.log("not my public");
// }
// function ageInDays() {
// var birthYear=prompt("birthYear");
// var ageInDayss =(2021-birthYear)*365;
// var h1 =document.createElement('h1');
// var textAnswer = document.createTextNode('You are '+ ageInDayss +' days');
// h1.setAttribute('id', 'ageInDays');
// h1.appendChild(textAnswer);
// document.getElementById('lol').appendChild(h1);
// }
// function reset(){
//     document.getElementById('lol').remove();
// }
// function puss(){
//  var image=document.createElement('img');
//  var div = document.getElementById('box1');
//  image.src="https://cdn2.thecatapi.com/images/4lf.gif";
//  div.appendChild(image);
// }

// function rpsGame(choice){
//  console.log(choice.id);
//  var humanchoice, botchoice;
//  humanchoice = choice.id;
//  result=finalMessage(choice.id);
//  botchoice=result.bot;
//  message= result.message;
//  rpsFrontend(choice.id, botchoice, result); 
// }
// function rpsFrontend(id, botchoice, result){
//     document.getElementById('rock').remove();
//     document.getElementById('paper').remove();
//     document.getElementById('scissor').remove();
//     var div = document.getElementById('box1');
//     var huimg = document.createElement('img');
//     var botimg= document.createElement('img');
//     var middle= document.createElement('text');
//     var output= document.createTextNode(result.message)
//     middle.appendChild(output);
//     let a={rock:'https://upload.wikimedia.org/wikipedia/commons/b/b4/Logan_Rock_Treen_closeup.jpg',
//     paper:'https://upload.wikimedia.org/wikipedia/commons/2/2f/Paper_450x450.jpg',
//     scissor:'https://images-na.ssl-images-amazon.com/images/I/61miSDpSacL._SY355_.jpg'};
//     huimg.src=a[botchoice];
//     botimg.src=a[id];

//     huimg.className='item';
//     middle.className=result.col;
//     botimg.className='item';

//     div.appendChild(huimg);
//     div.appendChild(middle);
//     div.appendChild(botimg);    
// }

// function finalMessage(id){
// i=Math.floor(Math.random()*3);
// let a=['rock','paper','scissor'];
// let info={
// message:"You lost !!",
// col:"red",
// n:i,
// bot:a[i],
// hum:a.indexOf(id),
// }
// console.log(info.hum)
// if (info.hum==i){
//     info.message="Its a Draw !!";
//     info.col="yellow";
// }
// if (info.hum==0 && i==2){
//     info.message="You won !!";
//     info.col="blue";
// }
// if (info.hum==2 && i==1){
//     info.message="You won !!";
//     info.col="blue";
// }
// if (info.hum==1 && i==0){
//     info.message="You won !!";
//     info.col="blue";
// }
// return info;
// }
var botcount=0;
var hucount=0;
var win=0;
var loss=0;
var draw=0;
var no=0;
const Hit = document.querySelector('#Hit');
Hit.addEventListener('click', blackjackHit);
Hit.disabled = false;

const Deal = document.querySelector('#Deal')
Deal.addEventListener('click', bot);
Deal.disabled = true;

const Res1 = document.querySelector('#Reset');
Res1.addEventListener('click', Res );
Res1.disabled = true;

const new1 = document.querySelector('#new');
new1.addEventListener('click', newg);

function blackjackHit() {
    i=Math.floor(Math.random()*10);
    let a=['A','2','3','4','5','6','7','8','9','10','J','K','Q'];
    n=a[i];
    num=i+1;
    var choice =document.createElement('img')
    str='static/images/'+n+'.png';
    choice.src=str;
    choice.className="img";
    var div = document.getElementById('You');
    div.appendChild(choice);
    hucount=hucount+num;
    console.log(hucount)
    var div = document.getElementById('y');
    var output= document.createTextNode(':'+hucount)
    
    div.appendChild(output);

    Deal.disabled = false;
    
    no++;

if (hucount>21){
    var output= document.createTextNode('YOU LOST!!');
    console.log(output);
    loss=loss+1;
    console.log(loss);
    div=document.getElementById('head');
    div.appendChild(output) 
    Hit.disabled = true;
    Deal.disabled = true;
    Res1.disabled = false; 
}
}

function bot(){
    var j=3;
    while(j--){
    i=Math.floor(Math.random()*10);
    let a=['A','2','3','4','5','6','7','8','9','10','J','K','Q'];
    n=a[i];
    num=i+1;
    var choice =document.createElement('img')
    str='static/images/'+n+'.png';
    choice.src=str;
    choice.className="img";
    var div = document.getElementById('Dealer');
    div.appendChild(choice);
    botcount=botcount+num;
    }
    Hit.disabled = true;
    Deal.disabled = true;
    Res1.disabled = false;

    console.log(botcount)
    var div = document.getElementById('d');
    var output= document.createTextNode(':'+botcount)
    div.appendChild(output);
if(botcount<=21){
    
result(botcount,hucount);
}
else{
    var output= document.createTextNode('YOU WON!!');
    console.log(output);
    div=document.getElementById('head');
    div.appendChild(output) 
    win++;
}
}


function result(botcount,hucount){
if (hucount<=21){
    if (botcount<hucount){
        var output= document.createTextNode('YOU WON!!');
        win++;
    }
    if (botcount==hucount){
        var output= document.createTextNode('Its a DRAW!!'); 
        draw++;
    }
    if(botcount>hucount){
        var output= document.createTextNode('YOU LOST!!'); 
        loss++;
        console.log(loss);
    }
console.log(output);

div=document.getElementById('head');
div.appendChild(output)
}

}
function Res(){
    
    var div = document.getElementById('W');
    div.innerHTML = "";



    var div = document.getElementById('Dealer');
    div.innerHTML = "";
    var div1 = document.createElement('div');
    div1.id='d';
    div1.className='t'
    var output= document.createTextNode('Dealer')
    div1.appendChild(output);
    div.append(div1)

    var div = document.getElementById('You');
    div.innerHTML = "";
    var div1 = document.createElement('div');
    div1.id='y';
    div1.className='t'
    var output= document.createTextNode('You')
    div1.appendChild(output);
    div.append(div1)
   

    var div = document.getElementById('W');
    div.innerHTML = '';
    var output= document.createTextNode(win)
    div.appendChild(output);

    var div = document.getElementById('L');
    div.innerHTML = '';
    var output= document.createTextNode(loss)
    div.appendChild(output);

    var div = document.getElementById('D');
    div.innerHTML = '';
    var output= document.createTextNode(draw)
    div.appendChild(output);

    var div = document.getElementById('head');
    div.innerHTML = 'Lets Play BlackJack!!<br>';
    
 
    botcount=0;
    hucount=0;
    Hit.disabled=false;
    Res1.disabled = true;


}

function newg() {
    location.reload();
}

