function myFruit() {
  var fruitCard = document.querySelectorAll(".fruit-card")
  fruitCard.forEach(function (fruit){
    fruit.classList.toggle('hide');
  })
}

function myVegis() {
  var vegiCard = document.querySelectorAll(".vegi-card")
  vegiCard.forEach(function (vegi){
    vegi.classList.toggle('hide');
  })
}

function myMeat() {
  var meatCard = document.querySelectorAll(".meat-card")
  meatCard.forEach(function (meat){
    meat.classList.toggle('hide');
  })
}
