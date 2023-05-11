function startCountdown() {
    var counterElement = document.getElementById("counter");
    var inputValue = document.getElementById("inputValue").value;
    var count = parseInt(inputValue);

    if (isNaN(count)) {
        counterElement.innerHTML = "Vui lòng nhập một số hợp lệ.";
        return;
    }

    var timer = setInterval(function() {
        counterElement.innerHTML = count;
        count--;

        if (count < 0) {
            clearInterval(timer);
            counterElement.innerHTML = "Counter finished";
        }
    }, 1000);
}