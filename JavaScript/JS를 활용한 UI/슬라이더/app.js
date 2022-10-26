let cnt = 1;
const radio = function () {
  document.getElementById("radio" + ++cnt).checked = true;
  if (cnt >= 4) cnt = 0;
};

setInterval(radio, 4000);
