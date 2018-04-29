# unit-4-game
UC Berkeley coding assignment 3 - CrystalsCollector Game

## Assignment requirement
1. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

2. Here's how the app works:
   * There will be four crystals displayed as buttons on the page.
   * The player will be shown a random number at the start of the game.
   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.
   * The player wins if their total score matches the random number from the beginning of the game.
   * The player loses if their score goes above the random number.
   * The game restarts whenever the player wins or loses.
     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

#### Game design notes
* The random number shown at the start of the game should be between 19 - 120.
* Each crystal should have a random hidden value between 1 - 12.

## Technology used
* jQuery
* Html
* Css
* Bootstrap framework

## Key learning points
```javascript
$(document).ready(function(){ ... });
```  
* using document ready to wrap the jQuery code to make sure the web page is ready before call any jQuery script

```javascript
function randomNumberGen(range,length,needOdd) {
    var array1 = [];
    for(var i = 0; i<length; i++){
        var x = Math.floor(Math.random()*range)+1;
        if (array1.indexOf(x) == -1 ){
            array1.push(x);
        }
        else{
         //   console.log("repeated"+x);
            i--; //if x already in the array go back repick
        }
    }  
    ...
}  
```
* define a function if certain feature of the code is required multiple times to save time. 

```javascript
var y = Math.floor(Math.random()*Math.round(range/2))*2+1; // generate a random odd number 
```
* to generate an random odd number in the range.

```javascript
    function generateNewGame(){
        // initial the game session
        $("#crystalContainer").empty();
        ...
    };
```
* better define a rest game function before any onclick event happen to recall after ending condition meet.

```javascript
var newCrystal = $("<img>");
newCrystal.attr("src",imgPathArray[parseInt(currentImgIndexArray[i])-1]);
newCrystal.attr("class", "col-md-3 col-sm-6 col-xs-6 crystal");
newCrystal.attr("data-points",crystalPointsArray[i]); 
$("#crystalContainer").append(newCrystal);
```
* recap syntax for jQuery define and append alter elements.

```javascript
// need to use document.on 
 $(document).on("click",".crystal",function(){ ... });
// instead of element.on 
 $(crystal).on ("click",function(){ ... });
```
* UNSOLVED question. wierd thing happen after renew game session inside onclick on crystal, need to use document.on to register click on crystals .


## Installation
Download the zip file, unzip on the desktop, open index.html

## Link to the site
[Click me](https://kittyshen.github.io/unit-4-game/)

## Author 
[Kitty Shen ](https://github.com/kittyshen)

https://github.com/kittyshen

## License
Standard MIT License

