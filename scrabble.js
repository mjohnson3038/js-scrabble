POINTS = {
      "A": 1,
      "B": 3,
      "C": 3,
      "D": 2,
      "E": 1,
      "F": 4,
      "G": 2,
      "H": 4,
      "I": 1,
      "J": 8,
      "K": 5,
      "L": 1,
      "M": 3,
      "N": 1,
      "O": 1,
      "P": 3,
      "Q": 10,
      "R": 1,
      "S": 1,
      "T": 1,
      "U": 1,
      "V": 4,
      "W": 4,
      "X": 5,
      "Y": 4,
      "Z": 10
    };

var Scrabble = function() {};

var Score = function(){

};

Score.score = function(word){
  var sum = 0;
  var bonus = 0;
  var splitToArray = word.toUpperCase().split("");
  for(var i = 0; i < word.length; i++){
    sum += (POINTS[splitToArray[i]]);
  }
  if (word.length == 7){
    bonus = 50;
  }
  sum += bonus;
  return sum;
};

Score.highest = function(arrayOfWords){

  // This initializes this function so that there is a base to compare with.
  var word = "";
  var score = 0;

  for(var i = 0; i < arrayOfWords.length; i++){

    // Necessary to be able to use the .score. QUESTION - why is this necessary?
    // var item = new Score(); when it is defined as a prototype

    // Including word.length != 7 is key here because if word.length == 7 then the original word wins the tie breaker
    if (Score.score(arrayOfWords[i]) == score && arrayOfWords[i].length < word.length && word.length !== 7){
      word = arrayOfWords[i];
      score = Score.score(arrayOfWords[i]);
    } else if(Score.score(arrayOfWords[i]) > score){
      word = arrayOfWords[i];
      score = Score.score(arrayOfWords[i]);
    } else if(Score.score(arrayOfWords[i]) == score && arrayOfWords[i].length == 7  && word.length !== 7){
      word = arrayOfWords[i];
      score = Score.score(arrayOfWords[i]);
    }
  }

  // Note, in the code above, the word is not reset unless everything above applies, meaning if the word is tied and hasnt been broken by another tie braker, then the first of the two words does not reset and that is the word that is returned.

  // console.log(word + ": " + score);

  return word;
};

var Player = function(name){
  this._name = name;
  this._plays = [];
};

Player.prototype.play = function(word){
  this._plays.push(word);
};

Player.prototype.totalScore = function(){
  var total = 0;
  for(var i = 0; i < this._plays.length; i++){
    total += Score.score(this._plays[i]);
  }
  return total;
};

Player.prototype.hasWon = function(){

};

Player.prototype.highestScoringWord = function(){
  return Score.highest(this._plays);
};

Player.prototype.highestWordScore = function(){
  var word = Score.highest(this._plays);
  return Score.score(word);
};

// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

module.exports = Scrabble;

console.log(">>>>>>>>Test Score");

console.log("aaaaaaa should equal 7: " + Score.score("aaaaaaa"));
console.log("qqqqqbf should equal 107:  " + Score.score("qqqqqbf"));

// var sample = new Score();
// console.log("apple: " + sample.score("apple"));
//
// var sample = new Score();
// console.log("aaaaaaa: " + sample.score("aaaaaaa"));
//
// var sample = new Score();
// console.log("qqqqqbf: " + sample.score("qqqqqbf"));
//
console.log(">>>>>>>>Test Bonus");
console.log("gorilla should equal 58: " + Score.score("gorilla"));

// // var sample = new Score ();
// // console.log("gorilla: " + sample.score("gorilla"));
//
console.log(">>>>>>>>>>>>Highest Score Test");
console.log(">>>>>>>>>>>>Positive Test Case");

console.log("should be gorilla: " + Score.highest(["gorilla", "apple", "qqqq", "epic", "yeeess"]));

// var array = new Score ();
// console.log(array.highest(["gorilla", "apple", "qqqq", "epic", "yeeess"]));
//
//
console.log(">>>>>>>>>>>>Tie Breaker - first word is returned");
// var array = new Score ();
// console.log(array.highest(["paple", "apple"]));
console.log("should be paple: " + Score.highest(["paple", "apple"]));

console.log(">>>>>>>>>>>>Tie Breaker - if 7 letters is used, it win");
// var array = new Score ();
// console.log(array.highest(["aaaaaad", "qqqqqj"]));
console.log("should be aaaaaad: " + Score.highest(["aaaaaad", "qqqqqj"]));

console.log(">>>>>>>>>>>>Tie Breaker - if 7 letters is used and played 2nd, it wins");
// var array = new Score ();
// console.log(array.highest(["qqqqqj", "aaaaaad"]));
console.log("should be aaaaaad: " + Score.highest(["qqqqqj", "aaaaaad"]));


console.log(">>>>>>>>>>>>Tie Breaker - both words are 7 letters, 1st wins");
// var array = new Score ();
// console.log(array.highest(["aaaaaad", "eeeeeeg"]));
// console.log(array.highest(["eeeeeeg", "aaaaaad"]));
console.log("should be aaaaaad: " + Score.highest(["aaaaaad", "eeeeeeg"]));
console.log("should be eeeeeeg: " + Score.highest(["eeeeeeg", "aaaaaad"]));

//
console.log(">>>>>>>>>>>>>>>>>>> Tests player");
//
console.log(">>>>>>Request Players Name");
var playerOne = new Player("Angie");
console.log("should be Angie: " + playerOne._name);
console.log("should be nothing yet: " + playerOne._plays);
//
console.log(">>>>>>>>>play(word) adds word to plays");
playerOne.play("vollyba");
playerOne.play("aaaa");
playerOne.play("qwewq");
console.log("should be 3 words in an array: " + playerOne._plays);

console.log("should be 98: " + playerOne.totalScore());

console.log(">>>>>>>>>> Tests Player highestScoringWord()");
console.log("should be vollyba: " + playerOne.highestScoringWord());

console.log(">>>>>>>>>> Tests Player highestWordScore()");
console.log("should be 65: " + playerOne.highestWordScore());
