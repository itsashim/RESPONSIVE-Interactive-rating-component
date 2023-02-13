const rate = document.querySelector(".sec2-elementp");

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".sec").classList.add("hide");
  document.querySelector(".sec2").classList.remove("hide");
  console.log("hello");
});

document.querySelector(".one").addEventListener("click", function () {
  rate.textContent = "you selected 1 out of 5";
});
document.querySelector(".two").addEventListener("click", function () {
  rate.textContent = "you selected 2 out of 5";
});
document.querySelector(".three").addEventListener("click", function () {
  rate.textContent = "you selected 3 out of 5";
});
document.querySelector(".four").addEventListener("click", function () {
  rate.textContent = "you selected 4 out of 5";
});
document.querySelector(".five").addEventListener("click", function () {
  rate.textContent = "you selected 5 out of 5";
});
