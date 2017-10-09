var info = document.getElementById("tally-count");
var minusButton = document.getElementById("minus");
var plusButton = document.getElementById("plus");
var resetButton = document.getElementById("reset");
var count = 0;

minusButton.onclick = function () {
  "use strict";
  count -= 1;
  info.innerHTML = count;
};

plusButton.onclick = function () {
  "use strict";
  count += 1;
  info.innerHTML = count;
};

resetButton.onclick = function () {
  "use strict";
  if (window.confirm("Are you sure you want to reset?") === true) {
    count = 0;
    info.innerHTML = count;
  }
};