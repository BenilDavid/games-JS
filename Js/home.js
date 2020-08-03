//challenge age in days

function ageInDays(){
    var year = prompt("what is the year you were born..?");
    var ageInDays = (2020 - year) * 365;

    var h3 = document.createElement('h3');
    var textanswer = document.createTextNode('you are '+ageInDays+' days old');
    h3.appendChild(textanswer);
    document.getElementById('flexbox-result').appendChild(h3);
}

function reset(){
    document.getElementById("flexbox-result").remove();
}

//challenge generate cat

function generatecat(){
    var image = document.createElement('img');
    image.src = 'img/cat.jpg';
    var div = document.getElementById('cat-gen');
    div.appendChild(image);
}

//challenge rock paper scissor

function rpsgame(yourchoice){
    console.log(yourchoice);
    var botchoice,humanchoice;
    humanchoice = yourchoice.id;
    
    botchoice = numberToChoice(random());
    console.log('computer choice '+botchoice);
    results = decideWinner(humanchoice,botchoice);
    console.log(results);
    message = finalmessage(results);
    console.log(message);
    rpsfrontend(humanchoice,botchoice,message);
}

//bot choice random selection
function random(){
   return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
 return ['rock','paper','scisssor'][number];
}

//shows 1 and 0 for win and lose
function decideWinner(yourchoice,computerchoice){
 var rpsdatabase = {
     'rock': {'rock': 0.5, 'paper': 0, 'scissor': 1},
     'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
     'scissor': {'rock': 0, 'paper': 1, 'scissor': 0.5},
 };

 var yourscore = rpsdatabase[yourchoice][computerchoice];
 var botscore = rpsdatabase[computerchoice][yourchoice];
 return [yourscore, botscore];
}

//remove all images after human selection
function rpsfrontend(humanImageChoice,botImageChoice,finalmessage){

    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src, 
        'scissor': document.getElementById('scissor').src
    }
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissor').remove();

var humandiv = document.createElement('div');
var messagediv = document.createElement('div');
var botdiv = document.createElement('div');

humandiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
messagediv.innerHTML = "<h3 style='color:"+finalmessage['color']+"' font-size: 60px; padding: 30px; '>"+finalmessage['message']+"<h3>";
botdiv.innerHTML = "<img src='"+imagesDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

document.getElementById('rps-div').appendChild(humandiv);
document.getElementById('rps-div').appendChild(messagediv);
document.getElementById('rps-div').appendChild(botdiv);
}

function finalmessage([yourscore,botscore]){
    if(yourscore === 0){
        return {'message':'you lost', 'color':'red'}
    }
    else if(yourscore === 1){
        return {'message':'you won', 'color':'green'}
    }
    else{
        return {'message':'you tied', 'color':'yellow'}
    }
}

