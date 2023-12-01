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
document.getElementById('numbers').innerText += arrey_pc


setTimeout(function(){
    document.getElementById('numbers').innerText = ''
},3000)

setTimeout(function(){
    arrey_player = insertPlayerNumber()
    document.getElementById('numbers_player').innerText = arrey_player
    document.getElementById('numbers').innerText += arrey_pc

},5000)
