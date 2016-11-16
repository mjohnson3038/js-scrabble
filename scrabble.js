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


Score.prototype.score = function(word){
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

Score.prototype.highest = function(arrayOfWords){

  // This initializes this function so that there is a base to compare with.
  var word = "";
  var score = 0;

  for(var i = 0; i < arrayOfWords.length; i++){

    // Necessary to be able to use the .score. QUESTION - why is this necessary?
    var item = new Score();
    if(item.score(arrayOfWords[i]) > score){
      console.log("ENTERED AND ABOUT TO REseT!");
      word = arrayOfWords[i];
      score = item.score(arrayOfWords[i]);
    }
  }

  console.log("HIGHESTTT!!");
  console.log(word);
  console.log(score);

  return word;
};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;

console.log("SCORE(WORD) TESTS");

var sample = new Score();
console.log("apple: " + sample.score("apple"));

var sample = new Score ();
console.log("gorilla: " + sample.score("gorilla"));

var array = new Score ();
console.log(array.highest(["gorilla", "apple", "qqqq", "epic", "yeeess"]));
