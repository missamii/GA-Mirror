console.log('starter.js successfully loaded and ready for action');

var deck =[];
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  for (var v = 0; v < values.length; v++){
    for (var s = 0; s < suits.length; s++) {
      console.log(values[v], suits[s]);
    }
  }
