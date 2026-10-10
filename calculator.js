function calculateTip () {
    let bill =
    Number (document.getElementById
        ("billAmount").value);

    let service =
    Number(document.getElementById
        ("sQuality").value);

    let tip = billAmount * service;
    let total = billAmount + tip;

}

document.getElementById("calcBtn")
.onclick =
calculateTip;