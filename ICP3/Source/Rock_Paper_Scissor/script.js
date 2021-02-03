// Fetching all the values and assigning them to variables
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let result = document.querySelector('.result');
let playerValues= document.querySelector('.playerValues')
let cWins = "Compter Wins";
let uWins = "User Wins";
console.log(result.innerHTML)
// Adding eventlisteners to all the variables and passing the parameter
// Parameter is passed when the event is click.
// Later the parameter is verified with random computer value
rock.addEventListener('click',()=>{
    compare('rock')
})

paper.addEventListener('click',()=>{
    compare('paper')
})

scissor.addEventListener('click',()=>{
    compare('scissor')
})

// RPS Comparission
let compare = (param) =>{
    // Defining the static array with all 3 values
    let values = ['rock','paper','scissor'];
    // Generating value using random() and fetching the value from array
    computerValue = values[Math.floor(Math.random() * values.length)]
    playerValues.innerHTML='Computer Played: '+computerValue+', User Played: '+param
    console.log(computerValue,param)
    // A base case compares when it is a tie
    if(param===computerValue){
        result.innerHTML="It's a tie mate!";

    }
    // Case when user clicks rock
    else if (param==='rock'){
        if(computerValue==='paper'){
        result.innerHTML=cWins;

        }else{
        result.innerHTML=uWins;

        }
        // Case when user clicks paper
    }else if(param==='paper'){
        if(computerValue==='rock'){
            result.innerHTML=uWins;
        }else{
            result.innerHTML=cWins;
        }
        // Case when user clicks scissor
    }else if(param==='scissor'){
        if(computerValue==='rock'){
            result.innerHTML=cWins;
        }else{
            result.innerHTML=uWins;
        }
    }
}