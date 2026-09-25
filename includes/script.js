document.addEventListener("DOMContentLoaded", () => {

    const modals = document.querySelectorAll(".modal");

    modals.forEach(modal => {

        const minusBtn = modal.querySelector(".minus");
        const plusBtn = modal.querySelector(".plus");
        const numberDisplay = modal.querySelector(".number-display");

        let count = 0;

        // Plus
        plusBtn.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            count++;
            numberDisplay.textContent = count;
        });

        // Minus
        minusBtn.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (count > 0) {
                count--;
                numberDisplay.textContent = count;
            }
        });

    });

});
