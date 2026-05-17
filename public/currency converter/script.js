const dropList = document.querySelectorAll(".drop-list select");
getButton = document.querySelector(".form button");

for (let i = 0; i < dropList.length; i++) {
    for (currency_code in country_code) {
        // selecting USD by efault as FROM currency and MYR as TO currency
        let selected;
        if (i == 0) {
            selected = currency_code == "USD" ? "selected" : "";
        } else if (i == 1) {
            selected = currency_code == "MYR" ? "selected" : "";
        }

        // creating option tag with currency code as value and text
        let optionTag = `<option value="${currency_code}">${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}

getButton.addEventListener("click", e => {
    e.preventDefault(); // preventing form from submitting
    getExchangeRate();
});