function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    // Display user message
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById('userInput').value = '';

    // Get chatbot response based on user input
    const response = getChatbotResponse(userInput);

    // Display chatbot response
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the latest message
}

// Define a function for the rule-based responses
function getChatbotResponse(userMessage) {
    const message = userMessage.toLowerCase();

    // Rule-based responses
    if (message.includes("hello") || message.includes("hi")) {
        return "Hello there! How can I assist you today?";
    } else if (message.includes("how are you")) {
        return "I'm just a chatbot, but I'm doing great! How about you?";
    } else if (message.includes("name")) {
        return "I am a chatbot without a name. You can call me Bot!";
    } else if (message.includes("bye")) {
        return "Goodbye! It was nice chatting with you.";
    } else if (message.includes("thank you") || message.includes("thanks")) {
        return "You're welcome! Feel free to ask me anything.";
    } else if (message.includes("help")) {
        return "Sure, I'm here to help. What do you need assistance with?";
    } else {
        return "Sorry, I didn't understand that. Can you ask me something else?";
    }
}
