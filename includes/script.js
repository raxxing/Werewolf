const modals = document.querySelectorAll(".modal");

modals.forEach(modal => {

    const minusBtn = modal.querySelector(".minus");
    const plusBtn = modal.querySelector(".plus");
    const numberDisplay = modal.querySelector(".number-display");

    let count = 0;


    // Minus button
    minusBtn.addEventListener("click", () => {

        if (count > 0) {
            count--;
            numberDisplay.textContent = count;
        }

    });


    // Plus button
    plusBtn.addEventListener("click", () => {

        count++;
        numberDisplay.textContent = count;

    });

});
