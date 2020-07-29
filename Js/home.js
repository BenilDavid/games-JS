function ageInDays(){
    var year = prompt("what is the year you were born..?");
    var ageInDays = (2020 - year) * 365;

    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('you are '+ageInDays+' days old');
    h1.appendChild(textanswer);
    document.getElementById('flexbox-result').appendChild(h1);
}

function reset(){
    document.getElementById("flexbox-result").remove();
}