console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//move the image
var img = document.getElementById('madi');
img.click = function() {
    img.style.marginLeft="100px";
};