var rSlider = document.getElementById("rRange");
var gSlider = document.getElementById("gRange");
var bSlider = document.getElementById("bRange");
var button = document.getElementById("button");
var display = document.getElementById("screen");

function onClick(event) {
    var id = event.srcElement.id;
    var slider = document.getElementById(id[0] + "Range");
    var value = document.getElementById(id[0] + "Val");
    slider.value = this.value;
    value.innerHTML = slider.value;
}

function changeColor() {
    var r = Number(rSlider.value);
    var g = Number(gSlider.value);
    var b = Number(bSlider.value);

    display.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

rSlider.addEventListener("input", onClick);
gSlider.addEventListener("input", onClick);
bSlider.addEventListener("input", onClick);
button.addEventListener("click", changeColor);