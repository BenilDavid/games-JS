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

function rpsgame(){
    var botchoice,humanchoice;
botchoice = numberToChoice(random());
alert(botchoice);
}

function random(){
   return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
 return ['rock','paper','scisssor'][number];
}