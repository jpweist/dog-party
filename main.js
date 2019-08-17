var inputBox = document.querySelector('input');
var nameDogButton = document.querySelector('button');

nameDogButton.addEventListener('click', function() {
    var changeH1Dog = document.querySelector('h1 span');
    changeH1Dog.innerText = inputBox.value;
    console.log(inputBox.value);
})




// var buttonClick = document.querySelector('button');
//
// buttonClick.addEventListener('click', function() {
//   var inputBox = document.querySelector('input').value;
//   var greeting = document.querySelector('p');
//   return greeting.innerText = `Hi ${inputBox}, your awesome!`;
// });
