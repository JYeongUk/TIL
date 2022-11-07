function setClock() {
  const now = new Date();
  const hours = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hrHand = document.querySelector(".hr-hand");
  const minHand = document.querySelector(".min-hand");
  const secHand = document.querySelector(".sec-hand");

  hrValue = hours * 30 + (minute * 6) / 12;
  minValue = minute * 6;
  secValue = second * 6;

  hrHand.style.transform = "rotate(" + hrValue + "deg)";
  minHand.style.transform = "rotate(" + minValue + "deg)";
  secHand.style.transform = "rotate(" + secValue + "deg)";
}

setInterval(setClock, 1000);
