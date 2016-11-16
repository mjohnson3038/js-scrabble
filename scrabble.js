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

var Score = function(word){
  this._word = word;
};

Score.prototype.score = function(){
  var sum = 0;
  var bonus = 0;
  var splitToArray = this._word.toUpperCase().split("");
  console.log(splitToArray);
  // var arraySymbols = [];
  for(var i = 0; i < this._word.length; i++){
    sum += (POINTS[splitToArray[i]]);
  }
  return sum;
};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;

var sample = new Score ("apple");
console.log(sample.score());
