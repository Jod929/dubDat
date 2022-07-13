var submit = document.getElementById('submit-btn');
var inputBox = document.getElementById('text-input');
var outputBox = document.getElementById('text-output');

var getInput = function(input) {
  var inputVal = document.getElementById("text-input").value;
  dubDat(inputVal);
}

var dubDat = function(sentence) {
  var result = '';
  var sentenceArr = sentence.split(' ');

  sentenceArr.forEach(function(word) {

    var afterDub = word.slice(1, word.length);
    if (word.charAt(0) === 'a' || word.charAt(0) === 'e' || word.charAt(0) === 'i' ||
      word.charAt(0) === 'o' || word.charAt(0) === 'u' ) {
      result += 'w' + word + ' ';
    } else {
      result += 'w' + afterDub + ' ';
    }

  });

  printOutput(result);

}

var printOutput = function(output) {
  document.getElementById("text-output").value = output;
}


submit.addEventListener('click', function() {
  getInput(inputBox);
});



