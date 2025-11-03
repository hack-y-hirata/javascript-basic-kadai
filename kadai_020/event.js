const textEvent = document.getElementById("text");
const btnEvent = document.getElementById("btn");

btnEvent.addEventListener("click", () => {
  textEvent.textContent = "ボタンをクリックしました";
});
