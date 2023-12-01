//CREATE FUNCTION THAT GENERATE AN ARREY COMPOSED BY FIVE UNIQUE RANDOM NUMBERS
function generateRandomNumber(){
    let arrey = []
    while(arrey.length != 5){
        let number = Math.floor(Math.random()*100 + 1)
        if(!arrey.includes(number)){
            arrey.push(number)
        }
    }
    console.log(arrey)

    return arrey;
}
