//FUNCTION THAT COMPARE TWO ARREY AND GIVE BACK AN ARREY COMPOSED BY THE EQUAL NUMBERS OF THE COMPARED INPUT (in this case)
function comparisonByArrey(arrey1,arrey2){
    let arrey = [] ;
    for(let i=0; i<arrey2.length; i++){
        console.log(parseInt(arrey2[i]));
        if(arrey1.includes(parseInt(arrey2[i]))){
            arrey.push(parseInt(arrey2[i]))
        }
        
    }
    return arrey
}
//CREATE FUNCTION THAT GENERATE AN ARREY COMPOSED BY FIVE UNIQUE RANDOM NUMBERS
function generateRandomNumber(){
    let arrey = []
    while(arrey.length != 5){
        let number = Math.floor(Math.random()*100 + 1)
        if(!arrey.includes(number)){
            arrey.push(number)
        }
    }
    return arrey;
}
//CREATE FUNCTION THAT PERMISS TO INSERT NUMBER BY PROMPT 
function insertPlayerNumber(){
    let arrey_player = []
    while(arrey_player.length != 5){
        let number = parseInt(prompt('inserire un numero'))
        if(!arrey_player.includes(number)){
            arrey_player.push(number)
        }
        else{
            alert('hai gia inserito questo numero')
        }
    }
    return arrey_player
    
}
let arrey_player = []    
let arrey_pc = generateRandomNumber()
let compared_arrey = [];
let points;
document.getElementById('numbers').innerText += arrey_pc


setTimeout(function(){
    document.getElementById('numbers').innerText = ''
},3000)

setTimeout(function(){
    arrey_player = insertPlayerNumber()
    document.getElementById('numbers_player').innerText = arrey_player
    document.getElementById('numbers').innerText += arrey_pc
    compared_arrey = comparisonByArrey(arrey_player,arrey_pc)
    points = compared_arrey.length
    document.getElementById('score').innerText +=`hai indovinato ${points} numeri su 5 e indovinato questi numeri ${compared_arrey}` 
},5000)
