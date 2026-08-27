let aiName = "";


const welcomePage = document.getElementById("welcomePage");

const nameInput = document.getElementById("nameInput");

const continueButton = document.getElementById("continueButton");

const chatBot = document.getElementById("chatBot");

const messageInput = document.getElementById("messageInput");

const sendButton = document.getElementById("sendButton");

const chatBox = document.getElementById("chatBox");

const aiHeading = document.getElementById("aiHeading");

continueButton.addEventListener("click", function() {
    aiName = nameInput.value;

    if (aiName === "") {
        alert("Please enter a name!");
        return;
    }

    aiHeading.textContent = "🤖 " + aiName;
    
    welcomePage.style.display = "none";
    chatBot.style.display = "block";

});

sendButton.addEventListener("click", function() {
    const message = messageInput.value;

    if (message === "") {
        return;
    }

    const userMessage = document.createElement("div");

    userMessage.className = "Message User-Input";

    userMessage.textContent = "You: " + message;

    chatBox.appendChild(userMessage);

    messageInput.value = "";

    const aiMessage = document.createElement("div");

    aiMessage.className = "Message AI-Message";

    aiMessage.textContent = aiName + ": Hello! How can I help?";

    chatBox.appendChild(aiMessage);

});
