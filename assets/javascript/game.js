/*
# CrystalsCollector Game
Pseudocode
Step0 create an image array holding 4-6 img path inside the assets/images folder
Step1 Create a div to display a random number from 19 - 120 with the number showing as targetScore
Step2 Create a div to hold the user win score and user lose score
Step3 Create 4 div to hold 4 separate elements, called id="crystalContainer" 
Step4 Generate 4 random number from 1 - 12 , with the number hidden
Step5 Check to see if the 4 random number contain at least one odd number
Step6 If at least one is an odd number then push the 4 numbers into an array called crystalPointsArray.
Step7 Using a for loop to Generate new jQuery div elements called addCrystalShield 
Step8.1 inside the addCrystalShield div Append new jQuery $("<img>") elements append it to current addCrystalShield
Step8.2 using math remainder operator( crystalPointsArray[i]%4 )to get an index number for the img path array?
Step8.3 step 8.2 might not work, may need to createa function to generate random index for those 4 img path.
Step8.4 need a function genrate an array of non-repeating random numbers in a certian range, which take the and 
number of numbers need as arguments, so it can be reused for both situation. index for img and 4 random number from 1-12  
Step9 set .attr("class", "col-md-3 col-sm-6") to make the webpage responsive to different screen viewport
Step10 add .attr("data-points") = crystalPointsArray[i]
Step11 add a class of "class = crystals" to  for future click event to those 4 elements and 
Step12 Append the above elements into the "crystalContainer" div in index.html
Step13 Declare a new variable to calculate the currentPoints
Step14 Detect the user click using jQuery on() method. get the number stored in data-points attribute
Step15 add the data-points value to currentPoints variable
Step16 if currentPoints > targetScore lose ++, if currentPoints = targetScore win ++
Step17 either ending condition meet in Step16 will point the game session pointer to Step 1 and repeat
*/

//create a function that generate random non-repeating numbers and store in 
//an array of certain length, and check if an odd number in the array 
function randomNumberGen(range,length,needOdd) {
    var array1 = [];
    for(var i = 0; i<length; i++){
        var x = Math.floor(Math.random()*range)+1;
        console.log(x);

        // check whether x in the array already, if not push it in
        if (array1.indexOf(x) == -1 ){
            array1.push(x);
        }
        else{
            console.log("repeated"+x);
            i--; //if x already in the array go back repick
        }
    }
    while(needOdd == true){
        var y = Math.floor(Math.random()*Math.round(range/2))*2+1; // generate a random odd number y
        if (array1.indexOf(y) == -1 ){
            var z = Math.floor(Math.random()*length); //pick any index element in the array
            array1[z] = y; // replace that index element with the odd number y
            needOdd = false;   
        }
    }
    return array1;
}
// testing function
var array = randomNumberGen(39,1,true);
console.log(array);
var array2 = randomNumberGen(12,4,true);
console.log(array2);
var array3 = randomNumberGen(10,1,false);
console.log(array3);
// function print(a){
//     console.log(a);
// }
// array.forEach(print);


