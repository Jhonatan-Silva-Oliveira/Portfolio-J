const openModalButtons = document.querySelectorAll(".open-modal");
const closeModalButtons = document.querySelectorAll(".close-modal");
const contentPortfolioCards = document.querySelectorAll(".portfolio-card");
const containPortfolios = document.querySelectorAll(".contain-portfolio-hide");

const toggleModal = (index) =>
{
  closeModalButtons[index].classList.toggle("hide");
  containPortfolios[index].classList.toggle("hide");
  contentPortfolioCards[index].classList.toggle("portfolio-card-hide");
};

openModalButtons.forEach((button, index) =>
{
  button.addEventListener("click", () => toggleModal(index));
});

closeModalButtons.forEach((button, index) =>
{
  button.addEventListener("click", () => toggleModal(index));
});
