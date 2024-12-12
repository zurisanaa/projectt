let left = document.querySelector('.left');
let right = document.querySelector('.right');
let text = document.querySelector('p');
let lR = document.querySelector('.leftRight');
let beg = document.querySelector('.beg');
let walkAway = document.querySelector('.walkAway');
let thinking = document.querySelector('.thinking');
let robbing = document.querySelector('.robbing');
let food = document.querySelector('.food');
let pizza = document.querySelector('.pizza');
let bread = document.querySelector('.bread');
beg.style.display = "none";
walkAway.style.display = "none";
thinking.style.display = "none";
food.style.display = "none";
robbing.style.display = "none";
pizza.style.display = "none";
bread.style.display = "none";

left.addEventListener('click', function(){
    console.log ("left was clicked");
    lR.style.display = "none";
    beg.style.display = "block";
    left.style.display = "none";
    right.style.display = "none";
    pizza.style.display = "block";
    text.innerHTML = "Once the girl reaches the store, she sits outside thinking. If you think that she should go inside and ask for food, double click the image. If you think she should walk away, float over the food.";
});

beg.addEventListener('dblclick', function(){
    console.log ("double clicked");
    food.style.display = "block";
    beg.style.display = "none";
    pizza.style.display = "none";
    text.innerHTML = "By going in and asking for food, the owner gave you a sandwhich, chips and water. You survive another day.";
});
pizza.addEventListener('mouseenter', function(){
    console.log ("emoji clicked");
    walkAway.style.display = "block";
    pizza.style.display = "none";
    beg.style.display = "none";
    text.innerHTML = "By not going inside, you never get anything to eat. This leads to your death.";
});
right.addEventListener('click', function(){
    console.log ("left was clicked");
    lR.style.display = "none";
    thinking.style.display = "block";
    left.style.display = "none";
    right.style.display = "none";
    bread.style.display = "block";
    text.innerHTML = "Once the girl reaches the store, she sits outside thinking. If you think that she should go inside and ask for food, double click the image. If you think she should rob the store, float over the food.";
});
thinking.addEventListener('dblclick', function(){
    console.log ("double clicked");
    robbing.style.display = "block";
    thinking.style.display = "none";
    bread.style.display = "none";
    text.innerHTML = "By going in and robbing the store, you get caught on camera. Because of this the police arrest you and you spend the next 12 years in prison.";
});
bread.addEventListener('mouseenter', function(){
    console.log ("emoji clicked");
    food.style.display = "block";
    thinking.style.display = "none";
    bread.style.display = "none";
    text.innerHTML = "By going inside and asking for food, the man willing gives you something to eat. You saved yourself from a life in prison.";
});




