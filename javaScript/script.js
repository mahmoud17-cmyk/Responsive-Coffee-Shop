document.querySelector(".fa-search").addEventListener("click", () => {
  document.querySelector(".serach-box").classList.toggle("active");

  document.querySelector(".login-box").classList.remove("active");
  document.querySelector(".navbar").classList.remove("active");
});

document.querySelector(".fa-shopping-cart").addEventListener("click", () => {
  document.querySelector(".login-box").classList.toggle("active");

  document.querySelector(".serach-box").classList.remove("active");
  document.querySelector(".navbar").classList.remove("active");
});

document.querySelector("#menu-icon").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("active");

  document.querySelector(".serach-box").classList.remove("active");
  document.querySelector(".login-box").classList.remove("active");
});

window.onscroll = function () {
  document.querySelector(".serach-box").classList.remove("active");
  document.querySelector(".login-box").classList.remove("active");
  document.querySelector(".navbar").classList.remove("active");
};
