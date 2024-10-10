document.addEventListener("DOMContentLoaded", () => {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const suitSymbols = {
        "Hearts": "&hearts;", 
        "Diamonds": "&diams;", 
        "Spades": "&spades;", 
        "Clubs": "&clubs;"
    };

    const deck = document.getElementById("deck");
    const shuffleButton = document.getElementById("shuffle-btn");

    shuffleButton.addEventListener("click", shuffleDeck);

    function shuffleDeck() {
        // Clear the deck before adding a new card
        deck.innerHTML = '';

        // Generate a random value and suit
        const randomValue = values[Math.floor(Math.random() * values.length)];
        const randomSuit = suits[Math.floor(Math.random() * suits.length)];

        // Create a card element
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        // Add suit symbols to the card
        const topSuit = document.createElement("div");
        topSuit.classList.add("suit", "top");
        topSuit.innerHTML = suitSymbols[randomSuit];

        const bottomSuit = document.createElement("div");
        bottomSuit.classList.add("suit", "bottom");
        bottomSuit.innerHTML = suitSymbols[randomSuit];

        // Add the value to the card
        cardElement.textContent = randomValue;

        // Append suit symbols and card to the deck
        cardElement.appendChild(topSuit);
        cardElement.appendChild(bottomSuit);
        deck.appendChild(cardElement);
    }
});
