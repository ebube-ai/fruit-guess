// Let's target some key elements
var remark = document.querySelector(".remark");
var button = document.querySelector(".btn")

//Let's hide the remark statement
remark.classList.add("hide");

//let's add an event listener to the button
button.addEventListener("click", StartGuessGame);

//let's create the function
function StartGuessGame(e){
//let's prevent the button's default refersh behaviour
e.preventDefault()

//let us create more variables
var guessFruit = document.querySelector(".guessfruit").value;
var remark = document.querySelector(".remark")
var remarkStatement = document.querySelector(".remarkstatement")
var fruitName = document.querySelector(".fruitname")
var fruitImg = document.querySelector(".fruitimg");

//Let's create an arry of fruits to be used by the game
var fruits = ["apple", "mango", "strawberry", "watermelon", "grapes"]

//Form Validation
if(guessFruit==""){
    setTimeout(() =>{
        remark.classList.remove("hide");
        remarkStatement.innerHTML ="Please guess a fruit";
        remark.style.backgroundColor = "red"
        setTimeout(() =>{
            remark.classList.add("hide")
        }, 3000)
    }, 200)
} else {
    remark.classList.remove("hide")
    var indexNumber = Math.round(Math.random()*2)
    fruitName.innerHTML = fruits[indexNumber];
    guessFruit = guessFruit.toUpperCase()

    if(fruitName.innerHTML.toUpperCase() == guessFruit){
        remarkStatement.innerHTML = "Congratulations, you guessed right!!"
        remark.style.backgroundColor = "green"
    } else{
        remarkStatement.innerHTML = "nope, Guess again"
        remark.style.backgroundColor = "red"
    }

    fruitImg.src ="img/"+ fruits[indexNumber] + ".jpeg"
}


}