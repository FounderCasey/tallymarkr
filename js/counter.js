var info = document.getElementById("tally-count");
var minusButton = document.getElementById("minus");
var plusButton = document.getElementById("plus");
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