// Select all "Read More" buttons
const buttons = document.querySelectorAll(".read-more-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const post = button.parentElement;
    const moreText = post.querySelector(".more-text");

    if (moreText.style.display === "block") {
      moreText.style.display = "none";
      button.textContent = "Read More";
    } else {
      moreText.style.display = "block";
      button.textContent = "Read Less";
    }
  });
});
