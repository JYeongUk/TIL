const copyBtn = document.querySelector(".copy-btn");
const textArea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  textArea.select();
  //   document.execCommand("copy");
  window.navigator.clipboard.writeText(textArea.value);
  copyBtn.innerHTML = "<i class='fas fa-check'></i>";
  copyBtn.style.background = "teal";
  copyBtn.style.color = "#fff";

  setTimeout(() => {
    document.getSelection().removeAllRanges();
    copyBtn.innerHTML = "<i class='fas fa-copy'></i>";
    copyBtn.style.background = "";
    copyBtn.style.color = "";
  }, 3000);
});
