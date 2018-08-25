window.addEventListener('load',init);

// GLOBAL
let RANKUP_points = 100;

var words =[
    [
        "next",
        "short",
        "nice",
        "bottle",
        "full",
        "soda",
        "vast",
        "glue",
        "close",
        "hurry",
        "robin",
        "trace",
        "rock",
        "absent",
        "cover",
        "note",
        "burst",
        "relax",
        "group",
        "sad",
        "rob",
        "yell",
        "pop",
        "mix",
        "fix",
        "hot",
        "pin",
        "hill",
        "wiry",
        "dirt",
    ],
    [
        "paddle",
        "answer",
        "awesome",
        "distance",
        "fertile",
        "wakeful",
        "belief",
        "slippery",
        "bizarre",
        "learned",
        "vivacious",
        "grandmother",
        "illegal",
        "thirsty",
        "wholesale",
        "tenuous",
        "skillful",
        "deteriorate",
        "poised",
        "humorous",
        "scrape",
        "replace",
        "languid",
        "adjoining",
        "interesting",
        "stranger",
        "polite",
        "scissors",
        "brainy",
        "interrogation",
    ],
    [
        "return;",
        "#include",
        "'helloworld'",
        "obj:1",
        "call()",
        "&lt;html&gt;",
        "not_easy",
        "more-dashes",
        "camelCase",
        "ASCII",
        "array[]",
        "printf('')",
        "&lt;/html&gt;",
        "^regex$",
        "System.out.println()",
    ],
    [


    ],
]

let pointer = 0;
let level = 0;
var orignamOffset = 33;
var offset = 33;
var nextOffset = 35;
let current = words[level][pointer];
let box = document.getElementById("scrollingwords");
let input = document.getElementById("wordinput");

// Initialization
function init() {

  // Load all GUIs
  $("#slider").roundSlider({
    radius: 200,
    width: 15,
    handleSize: "+12",
    handleShape: "round",
    sliderType: "min-range",
    showTooltip: false,
    editableTooltip: false,
    keyboardAction: false,
    readOnly: true,
    value: RANKUP_points
});
  // word list
  var final = "";
  for(var i = 0; i < words[level].length; i++) {
      final += "<li>" + words[level][i] + "</li>";
  }

  document.getElementsByTagName("ul")[0].innerHTML = final;
  document.getElementById("word").innerHTML = current;
  var currentScroll = document.getElementsByTagName("li")[pointer];
  currentScroll.style.fontSize = "19pt";
  currentScroll.style.fontWeight = "bold";
  currentScroll.style.color = "rgba(255, 255, 255, 0.7)";

}

input.onfocus = function() {
    input.placeholder = "";
}

input.onblur = function() {
    input.placeholder = "Type the words here";
}

function ui() {
  // customize the bar colors :D
  if (RANKUP_points < 70) {
        $("#slider").roundSlider().find(".rs-range-color").css({
            "background-color": "#ED8500"
        });
        $("#slider").roundSlider().find(".rs-path-color").css({
            "background-color": "#FFCC8B"
        });
  }

  if (RANKUP_points < 40) {
        $("#slider").roundSlider().find(".rs-range-color").css({
            "background-color": "#FF0000"
        });
        $("#slider").roundSlider().find(".rs-path-color").css({
            "background-color": "#FFABAB"
        });
  }

  if (RANKUP_points <= 0) {
    RANKUP_points=100;
    $("#slider").roundSlider().find(".rs-range-color").css({
        "background-color": "#6DFFA4"
    });
    $("#slider").roundSlider().find(".rs-path-color").css({
        "background-color": "#BEFFD7"
    });
  }
}

function changeLevel(newlevel) {
  input.value = "";
  level = newlevel;
  pointer = 0;
  current = words[level][pointer];
  var final = "";
  for(var i = 0; i < words[level].length; i++) {
      final += "<li>" + words[level][i] + "</li>";
  }
  document.getElementsByTagName("ul")[0].innerHTML = final;
  document.getElementById("word").innerHTML = current;
  offset = orignamOffset;
  var currentScroll = document.getElementsByTagName("li")[pointer];
  currentScroll.style.fontSize = "19pt";
  currentScroll.style.fontWeight = "bold";
  currentScroll.style.color = "rgba(255, 255, 255, 0.7)";
  box.style.marginTop = offset.toString() + "px";
}

input.oninput = function() {

  // IF INPUT IS CORRECT
  if (input.value === words[level][pointer]) {
    if (RANKUP_points > 0 && pointer != 29) {
      RANKUP_points-=10;
      ui();
      $('#slider').roundSlider('setValue', RANKUP_points);
      pointer+=1;
      current = words[level][pointer];
      document.getElementById("word").innerHTML = current;
      var currentScroll = document.getElementsByTagName("li")[pointer-1];
      currentScroll.style.fontSize = "13pt";
      currentScroll.style.fontWeight = "";
      currentScroll.style.color = "rgba(255, 255, 255, 0.2)";
      currentScroll = document.getElementsByTagName("li")[pointer];
      currentScroll.style.fontSize = "19pt";
      currentScroll.style.fontWeight = "bold";
      currentScroll.style.color = "rgba(255, 255, 255, 0.7)";
      offset = offset - nextOffset;
      box.style.marginTop = offset.toString() + "px";
      input.value = "";
    } else {
      var n = level + 1;
      changeLevel(n);
    }
  }

}
