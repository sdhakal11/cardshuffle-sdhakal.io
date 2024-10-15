
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
    const cardCountDropdown = document.getElementById("card-count");

    shuffleButton.addEventListener("click", shuffleDeck);

    function shuffleDeck() {
        // Clear the deck before adding new cards
        deck.innerHTML = '';

        // Get the number of cards to shuffle from the dropdown
        const numOfCards = parseInt(cardCountDropdown.value);

        // Generate random cards and add them to the deck
        for (let i = 0; i < numOfCards; i++) {
            const randomValue = values[Math.floor(Math.random() * values.length)];
            const randomSuit = suits[Math.floor(Math.random() * suits.length)];

            // Create a card element
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            // Determine color: Red for Hearts/Diamonds, Black for Spades/Clubs
            const colorClass = (randomSuit === "Hearts" || randomSuit === "Diamonds") ? "red" : "black";

            // Add top left value and suit
            const topValueSuit = document.createElement("div");
            topValueSuit.classList.add("value-suit", "top-left", colorClass);
            topValueSuit.innerHTML = `${randomValue} ${suitSymbols[randomSuit]}`;

            // Add bottom right value and suit
            const bottomValueSuit = document.createElement("div");
            bottomValueSuit.classList.add("value-suit", "bottom-right", colorClass);
            bottomValueSuit.innerHTML = `${randomValue} ${suitSymbols[randomSuit]}`;

            // Add large central suit symbol
            const centerSuit = document.createElement("div");
            centerSuit.classList.add("center-suit", colorClass);
            centerSuit.innerHTML = suitSymbols[randomSuit];

            // Append the value-suit elements and card to the deck
            cardElement.appendChild(topValueSuit);
            cardElement.appendChild(centerSuit);
            cardElement.appendChild(bottomValueSuit);

            // Add the card to the deck
            deck.appendChild(cardElement);

            // Apply a larger gap for each subsequent card
            cardElement.style.left = `${i * 40}px`; // Shift each card by 40px to the right
        }
    }
});
