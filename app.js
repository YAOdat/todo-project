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


var answersArray = [];


function questions(question){
    var answer= prompt(question)
    if (answer==="" || answer==null){
        for(i=0;i<10;i++){
            if(answer!=="" && answer!==null){
                break;
            }
            prompt(question);
        }
       
        return answer;
    }
 }
 const questionOne="Do you play sport?";
 const questionTwo ="Do you have free time?";
 const questionThree="Did you sleep well last night???!!!";

 questions(questionOne);
 questions(questionTwo);
 questions(questionThree);
 

 var answersArray = [questionOne, questionTwo, questionThree ];
console.log(answersArray);





    


