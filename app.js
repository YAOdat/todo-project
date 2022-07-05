let username= prompt("Please, enter your name");
let gender=prompt("Please, enter your gender");
let age=prompt("Please, enter your age");

if (age<=0){
    alert("Incorrect age!");

}

let welcome= confirm("Do you want to be welcomed?");

let capGender = gender.charAt(0).toUpperCase() + gender.slice(1);
let capUsername = username.charAt(0).toUpperCase() + username.slice(1);

if(capGender === "Male" && welcome==true ){
    alert("Welcome Mr."+ capUsername + "!");
} else if(capGender === "Female" && welcome==true ){
    alert("Welcome Ms."+ capUsername + "!");
} else if (welcome==true ) {
alert("Welcome!")
}


let questionOne = prompt("Do you play sport?")

if( questionOne === "" || questionOne === null  ){
    prompt("Do you play sport?!")
}

if( questionOne === "" || questionOne === null  ){
    prompt("Do you play sport?!!!!")
}
   
let questionTwo = prompt("Do you have free time?")
if( questionTwo === "" || questionTwo === null  ){
    questionTwo = prompt("Do you have free time??!")
}

if( questionTwo === "" || questionTwo === null  ){
    questionTwo= prompt("Do you have free time?!!!!")
}
let questionThree = prompt("Did you sleep well last night?")

if( questionThree === "" || questionThree === null  ){
    questionThree= prompt("Did you sleep well last night?!")
}

if( questionThree === "" || questionThree === null  ){
    questionThree= prompt("Did you sleep well last night???!!!")
}


var answersArray = [questionOne, questionTwo, questionThree ];
console.log(answersArray)



    


