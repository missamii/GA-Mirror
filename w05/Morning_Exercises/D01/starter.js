console.log('W05d01 morning exercise connected');

var areAnagrams = function(wordOne, wordTwo) {
  if (wordOne.length == wordTwo.length) {
    var wordOneSplit = wordOne.split('');
    var wordTwoSplit = wordOne.split('');
    console.log(wordTwoSplit);
      if (wordOneSplit.sort().join('|') ==  wordTwoSplit.sort().join('|')) {
        console.log('this is Anagrams!');
        else {
          console.log('this is not Anagrams');
        }
      }
  }
};
areAnagrams('meat', 'team');
areAnagrams('mare', 'rare');
areAnagrams('reserve', 'reverse')
