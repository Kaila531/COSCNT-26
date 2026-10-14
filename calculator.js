function calculateTip () {
    let billAmount =
    Number (document.getElementById
        ("billAmount").value);

    let service =
    Number(document.getElementById
        ("sQuality").value);

    let tip = billAmount * service;
    let total = billAmount + tip;

document.getElementById("output").textContent =
        `Tip: $${tip.toFixed(2)} | Total: $${total.toFixed(2)}`;

}

const btn = document.getElementById("calcBtn");
btn.addEventListener("click", calculateTip);