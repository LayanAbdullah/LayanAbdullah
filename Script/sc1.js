window.onload = function() {
    document.getElementById("my_audio").play();
}
$(function () {
var body = $('body');
var backgroundImages = [
' url(LayanAbdullah.github.io/Images/Mario64_3.jpeg) ',
' url(LayanAbdullah.github.io/Images/Mario64_2.jpeg) '];

var current = 0;

function nextBackground() {
body.css(
'background-image',
backgroundImages[current = ++current % backgroundImages.length]);

setTimeout(nextBackground, 10000); //automatically change background-image every 5 seconds
}
setTimeout(nextBackground, 10000); //automatically change background-image every 5 seconds
body.css('background-image', backgroundImages[0]);
});