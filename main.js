var inputBox = document.querySelector('input');
var nameDogButton = document.querySelector('button');


nameDogButton.addEventListener('click', function() {
    var changeH1Dog = document.querySelector('h1 span');
    changeH1Dog.innerText = inputBox.value;
    console.log(inputBox.value);
})

// var howToDogButton = document.querySelector('#howButton');
//
// howToDogButton.addEventListener('click', function() {
//   var howToDogText = document.querySelector('#howToDogId');
//   howToDogText.classList.add('hidden');
//
// })
