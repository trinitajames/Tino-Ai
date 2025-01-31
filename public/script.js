const responses = {
    hi: "Hello! How can I assist you?",
    hey: "Hi there! What's on your mind?",
    hello: "Hello! How can I help?",
    "i am sad": "I'm sorry to hear that. Do you want to talk about it?",
    "i am happy": "That's great to hear! Keep smiling!",
    "where are you": "I'm here, right on your screen!",
    "i like you": "Thank you! I like you too!",
    "i hate you": "I'm here to help, even if you're upset.",
    "i had a bad day": "I'm sorry to hear that. Want to tell me about it?",
    "what to do right now": "Maybe take a deep breath and relax for a moment?",
    "ask me something": "Sure! What's your favorite hobby?",
    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
  };
  
  document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const userInput = event.target.value.trim().toLowerCase();
      const chatOutput = document.getElementById("chat-output");
      const botResponse = responses[userInput] || "I'm not sure how to respond to that. Can you tell me more?";
      chatOutput.innerHTML += `<div class="user-message">You: ${event.target.value}</div>`;
      chatOutput.innerHTML += `<div class="bot-message">Tino: ${botResponse}</div>`;
      event.target.value = "";
      chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll to the latest message
    }
  });
  