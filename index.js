var button = docement.getElementById("button-1");
var i = 1;
button.onclick = function(event) {
    ++i;
    button.innerHTML = i;
    console.log(event);
};
console.log(button);
