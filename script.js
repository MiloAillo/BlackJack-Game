// player tracker
let blackjack = false;
let isAlive = true;
let win = false;
let sumWagerFirstSecondCard = 0;
let sumDealerFirstSecondCard = 0;
let dealerCard = 0;
let dealerSum = 0;
let playerCard = 0;
let playerSum = 0

let playerCardLoop = 0;
let dealerFirstCard = 0;
let dealerSecondCard = 0;

// hide hit and stand buttons
document.getElementById("hit").style.display = "none";
document.getElementById("stand").style.display = "none";
document.getElementById("start").style.display = "block";

function start() {

  // hide start button
  document.getElementById("hit").style.display = "block";
  document.getElementById("stand").style.display = "block";
  document.getElementById("start").style.display = "none";
  
  let message = document.getElementById("message");
  playerCard = document.getElementById("playerCard");
  playerSum = document.getElementById("playerSum");
  dealerCard = document.getElementById("dealerCard");
  dealerSum = document.getElementById("dealerSum");
  
  //math random
  const random = Math.floor(Math.random() * 10) + 1;
  const random2 = Math.floor(Math.random() * 10) + 2;

  const random3 = Math.floor(Math.random() * 10) + 1;
  const random4 = Math.floor(Math.random() * 10) + 2;
  // wager first, second card.
  let wagerFirstCard = random;
  let wagerSecondCard = random2;
  sumWagerFirstSecondCard = wagerFirstCard + wagerSecondCard;

  // dealer first, second card.
  dealerFirstCard = random3;
  dealerSecondCard = random4;
  sumDealerFirstSecondCard = dealerFirstCard + dealerSecondCard;
  
  // card data
  playerCard.innerHTML = wagerFirstCard + " + " + wagerSecondCard;
  playerSum.innerHTML = sumWagerFirstSecondCard;
  dealerCard.innerHTML = dealerFirstCard + " + ?" 
  dealerSum.innerHTML = "?";
  
  console.log("player first + second =" + sumWagerFirstSecondCard);
  console.log("dealer first + second =" + sumDealerFirstSecondCard);

  // wager first and second card logic 
if (sumWagerFirstSecondCard < 21) {
  console.log("Dealer: Do you want to hit or stand?")
  isAlive = true;
  win = false;
  message.innerHTML = "Dealer: Do you want to hit or stand?";
}
else if (sumWagerFirstSecondCard === 21) {
  console.log("Dealer: Blackjack! You win!")
  blackjack = true;
  win = true;
  message.innerHTML = "Dealer: Blackjack! You win!";

  document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("start").style.display = "block";
}
else {
  console.log("Dealer: Bust! You lose!")
  isAlive = false;
  win = false;
  message.innerHTML = "Dealer: Bust! You lose!";
}
  // player data for testing
console.log("alive =" + isAlive)
console.log("blackjack =" + blackjack)
  console.log("win =" + win)

  // Loop Testing Purpose
  playerCardLoop = sumWagerFirstSecondCard;
  console.log("player card loop =" + playerCardLoop)
}

function hit() {
  const random = Math.floor(Math.random() * 10) + 1;
  let randomCard = random;
  sumWagerFirstSecondCard += randomCard;
  console.log("hit =" + sumWagerFirstSecondCard);

  playerSum = document.getElementById("playerSum")
  
  playerCard.innerHTML += " + " + randomCard;
  playerSum.innerHTML = sumWagerFirstSecondCard;
  
  if (sumWagerFirstSecondCard < 21) {
    console.log("Dealer: Do you want to hit or stand?")
    isAlive = true;
    win = false;
    message.innerHTML = "Dealer: Do you want to hit or stand?";
  }
  else if (sumWagerFirstSecondCard === 21) {
    console.log("Dealer: Blackjack! You win!")
    blackjack = true;
    win = true;
    message.innerHTML = "Dealer: Blackjack! You win!";
    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("start").style.display = "block";
  }
  else {
    console.log("Dealer: Bust! You lose!")
    isAlive = false;
    win = false;
    message.innerHTML = "Dealer: Bust! You lose!";
    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("start").style.display = "block";
  }
    // player data for testing
  console.log("alive =" + isAlive)
  console.log("blackjack =" + blackjack)
  console.log("win =" + win)

  // Loop Testing Purpose
  playerCardLoop = sumWagerFirstSecondCard;
  console.log("Loop =" + playerCardLoop)
}

function stand() {

  let message = document.getElementById("message");
  dealerCard.innerHTML = dealerFirstCard + " + " + dealerSecondCard;
  dealerSum.innerHTML = sumDealerFirstSecondCard;
  
  
  while (sumDealerFirstSecondCard < 17) {
    const random = Math.floor(Math.random() * 10) + 1;
    let randomCard = random;
    sumDealerFirstSecondCard += randomCard;

    dealerCard.innerHTML += " + " + randomCard;
    dealerSum.innerHTML = sumDealerFirstSecondCard;
  }

  if (sumDealerFirstSecondCard > 21) {
    console.log("Dealer: Bust! You win!")
    message.innerHTML = "Dealer: Bust! You win!";
    
    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("start").style.display = "block";
  } 
  else if (sumDealerFirstSecondCard < sumWagerFirstSecondCard) {
    console.log("Dealer: You win!")
    message.innerHTML = "Dealer: You win!";
    
    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("start").style.display = "block";
  }
  else if (sumDealerFirstSecondCard === sumWagerFirstSecondCard) {
    console.log("Dealer: Tie!")
    message.innerHTML = "Dealer: Tie!";

    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("start").style.display = "block";
  } 
  else if (sumDealerFirstSecondCard > sumWagerFirstSecondCard) {
    console.log("Dealer: You lose!")
    message.innerHTML = "Dealer: You lose!";

    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("start").style.display = "block";
  }
}