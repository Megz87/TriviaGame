//counters:
var userGuess = 0;
var correctAnswer = "Amazon";
var win = 0;
var unanswered = 0;
var loss = 0;
var totalQuestions = $('.questions').size();

$(document).ready(function(){
answers = new Object();
$('.option').change(function(){
    var answer = ($(this).attr('value'))
    var question = ($(this).attr('name'))
    answers[question] = answer
})
var item1 = document.getElementById("questions");

var totalQuestions = $('.questions').size();
var currentQuestion = 0;
  $questions = $('.questions');
  $questions.hide();
  $($questions.get(currentQuestion)).fadeIn();
  $('#next').click(function() {
    $($questions.get(currentQuestion)).fadeOut(function() {
      currentQuestion = currentQuestion + 1;
      if (currentQuestion == totalQuestions) {
        var result = sum_values()
          //do stuff with the result
        alert(result);
      } else {
        $($questions.get(currentQuestion)).fadeIn();
      }
    });

  });
});
