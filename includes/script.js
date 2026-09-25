const buttons = document.querySelectorAll(".role-btn");
const modals = document.querySelectorAll(".card-open");

// Open card
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.modal);
        modal.style.display = "flex";
    });
});

// Close card
modals.forEach(modal => {

    const closeButton = modal.querySelector(".card-close");

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close when clicking outside
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Counter
    const minusBtn = modal.querySelector(".minus");
    const plusBtn = modal.querySelector(".plus");
    const numberDisplay = modal.querySelector(".number-display");

    let count = 0;

    minusBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            numberDisplay.textContent = count;
        }
    });

    plusBtn.addEventListener("click", () => {
        count++;
        numberDisplay.textContent = count;
    });
});