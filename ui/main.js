//code to cunter the variable
var counter = 0;
var button = document.getElementById('counter');

button.onclick = function() {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_butt');
submit.onclick = function () {
    //make a request to the server and send name
    //capture a list of names and render as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for(var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};
