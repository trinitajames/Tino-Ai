async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    // Display user message in chatbox
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById('userInput').value = '';

    // Send user input to the backend
    const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();

    // Display AI response in chatbox
    messagesDiv.innerHTML += `<p><strong>Tino:</strong> ${data.message}</p>`;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;  // Auto-scroll to the latest message
}
