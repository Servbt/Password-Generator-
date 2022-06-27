    // 1. present with a series of prompts/criteria ~
          //need to make lists(ARRAYS) for words and numbers/signs ~

    // 2. validate input and at least one character type is selected ~
          //need to force user to pick one prompt value to be true ~
          // on passLength NEEDS to be a NUMBER ~

    // 3. generate the password
          //need to randomly choose numbers and formulate between all of chosen lists(ARRAYS)
          //need to merge between said arrays and randomize them after the correct choices


    // 4.  display the password on the page




// targets html ID with a variable known as "generateBtn"
var generateBtn = document.querySelector("#generate");

//String Chunks
var lowerLetters = "qwertyuiopasdfghjklzxcvbnm";
var upperLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "1234567890";
var specList = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~";

// declaring arrays from string chunks
var listLower = lowerLetters.split("");
var listUpper = upperLetters.split("");
var listNum = numbers.split("");
var listChar = specList.split("");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
 

  function generatePassword() {
    //criteria to select
    var lowCase = confirm("would you like your password to include lowercase letters?");
    var upCase = confirm("what about upper case letters?");
    var nums = confirm("are numbers okay to put in there?");
    var speChar = confirm("and finally, special characters???");
    var passLength = prompt("please choose between 8 and 128 characters...")
    console.log("prompts loaded properly");
    
    
    // Outcomes for passLength input
    // password length check
    if (passLength <= 7 || passLength >= 129 ) {
      alert("please choose a proper value...");
      console.log("a number that was too high or low was picked");
      return "nothing!";

      // the BASE Requirement for generation
    } else if (passLength > 7 || passLength < 129 ) {
      console.log("length requirement met");
      
      // further in the decicion tree... these are outcomes for confirm prompts
      // If no prompts are chosen
      if (lowCase != true && upCase != true && nums != true && speChar != true) {
        alert("you have to pick at least ONE property!!!");
        console.log("prompt choice failure");
        return "nothing!"
      }
      
      // If all prompts are chosen
      if (lowCase && upCase && nums && speChar) {
        var everyChar = listLower.concat(listUpper,listNum,listChar);
        console.log(everyChar);
        alert("you Chose ALL prompts!")
      }


    } else {
      alert("use ONLY numbers");
      console.log("something other than numbers was inputed");
      return "nothing!"
    }
    
  }

}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
