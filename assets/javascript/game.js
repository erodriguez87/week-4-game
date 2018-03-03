// Creating variables to hold the numbers
var score = 0;
var scoreDiv = $(".score");
var target = Math.floor(Math.random() * 100); console.log ('target', target);
var targetDiv = $(".target");

var emerald = Math.floor(Math.random() * 12); console.log ('emerald', emerald);
var diamond = Math.floor(Math.random() * 12); console.log ('diamond', diamond);
var gem = Math.floor(Math.random() * 12); console.log ('gem', gem);
var ruby = Math.floor(Math.random() * 12); console.log ('ruby', ruby);

var statusDiv = $(".status");

$(".crystalDiv").on("click", ".diamond", function() {
  score += diamond;
  console.log('score after', score);
  winCondition();
});

$(".crystalDiv").on("click", ".emerald", function() {
  score += emerald;
  console.log('score after', score)
  winCondition();
});

$(".crystalDiv").on("click", ".gem", function() {
  score += gem;
  console.log('score after', score)
  winCondition();
});
$(".crystalDiv").on("click", ".ruby", function() {
  score += ruby;
  console.log('score after', score)
  winCondition();
});

function empty() {
  $(".targetDiv").empty();
  $(".scoreDiv").empty();
  score = 0;
  target = Math.floor(Math.random() * 100); console.log ('target', target);
  emerald = Math.floor(Math.random() * 12); console.log ('emerald', emerald);
  diamond = Math.floor(Math.random() * 12); console.log ('diamond', diamond);
  gem = Math.floor(Math.random() * 12); console.log ('gem', gem);
  ruby = Math.floor(Math.random() * 12); console.log ('ruby', ruby);

};

function winCondition(){
  targetDiv.text(target);
  scoreDiv.text(score);
  if (target === score){
    statusDiv.text('WINNER');
    statusDiv.attr('class','win');
    empty();
  } else if (target < score) {
    statusDiv.text('Big L');
    statusDiv.attr('class','lose');
    empty();
  } 
}



