var inputBox = document.querySelector('input');
var nameDogButton = document.querySelector('button');


nameDogButton.addEventListener('click', function() {
    var changeH1Dog = document.querySelector('h1 span');
    changeH1Dog.innerText = inputBox.value;
    console.log(inputBox.value);
})
// button one how ***********
var howToDogButton = document.getElementById('howButton');

howToDogButton.addEventListener('click', function() {
  var howToDogText = document.getElementById('howToDogId');
  howToDogText.classList.toggle('hidden');
  howToDogButton.classList.toggle('button-space');
})
// button two what ***********

var whatDogButton = document.getElementById('whatDog');

whatDogButton.addEventListener('click', function() {

  var whatDogsText = document.getElementById('whatDogs');
  whatDogsText.classList.toggle('hidden');
  whatDogButton.classList.toggle('button-space');

})

// button three facts ***********

var factDogsButton = document.getElementById('factDogs');

factDogsButton.addEventListener('click', function() {

  var factDogsText = document.getElementById('factDogsText');
  factDogsText.classList.toggle('hidden');
  factDogsButton.classList.toggle('button-space');

})
