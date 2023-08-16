const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const containPortfolioCard = document.querySelector("#contain-portfolio-card");
const containPortfolio = document.querySelector("#contain-portfolio");
const containVideo = document.querySelector("#contain-video");
const containBtns = document.querySelector("#contain-btns");

const toggleModal = () =>
{
  closeModalButton.classList.toggle("hide")
  containPortfolio.classList.toggle("hide")
  containVideo.classList.toggle("hide")
  containBtns.classList.toggle("hide")
  containPortfolioCard.classList.toggle("portfolio-card-hide")
}

[openModalButton, closeModalButton].forEach((el) =>
{
  el.addEventListener("click", () => toggleModal());
})