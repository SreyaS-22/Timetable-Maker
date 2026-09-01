let aiName = "";


const welcomePage = document.getElementById("welcomePage");

const nameInput = document.getElementById("nameInput");

const continueButton = document.getElementById("continueButton");

const mainMenu = document.getElementById("mainMenu");

const chatBot = document.getElementById("chatBot");

const revisionPage = document.getElementById("revisionPage");

const chatButton = document.getElementById("chatButton");

const timetableButton = document.getElementById("timetableButton");

const backButton = document.getElementById("backButton");

const messageInput = document.getElementById("messageInput");

const sendButton = document.getElementById("sendButton");

const chatBox = document.getElementById("chatBox");

const aiHeading = document.getElementById("aiHeading");

mainMenu.style.display = "none";
chatBot.style.display  = "none";
revisionPage.style.display = "none";


chatButton.addEventListener("click", function() {

    mainMenu.style.display = "none";
    chatBot.style.display = "block";

    aiHeading.textContent = "🤖 " + aiName;

    const aiMessage = document.createElement("div");

    aiMessage.className = "Message AI-Message";

    aiMessage.innerHTML = "<strong>"+ aiName + "</strong>" + ": Hello! How can I help?";

    chatBox.appendChild(aiMessage);
});

timetableButton.addEventListener("click", function() {
    mainMenu.style.display = "none";
    revisionPage.style.display = "block";
});

backButton.addEventListener("click", function() {
    revisionPage.style.display = "none";
    mainMenu.style.display = "block";
});

chatbotBackButton.addEventListener("click", function(){
    chatBot.style.display = "none";
    mainMenu.style.display = "block";
});

async function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    const userMessage = document.createElement("div");

    userMessage.className = "Message User-Input";

    userMessage.innerHTML = "<strong>You: </strong>" + message;

    chatBox.appendChild(userMessage);

    messageInput.value = "";

    sendButton.disabled = true;

    const typingMessage = document.createElement("div");

    typingMessage.className = "Message AI-Message";

    typingMessage.innerHTML = "<strong>"+ aiName + ": </strong>Thinking...";

    chatBox.appendChild(typingMessage);

    try {

        const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message
        })

    });

    if (!response.ok) {
        throw new Error("Server Error")
    }

    const aiResponse = await response.text();

    typingMessage.innerHTML = "<strong>" + aiName + ": </strong>" + aiResponse.replace(/\n/g, "<br>");

    }
    
    catch (error) {

        typingMessage.innerHTML =

        "<strong>" + aiName + ":</strong>" + "Sorry, something went wrong. Please try again.";

        console.error(error)

    }

    sendButton.disabled = false;

    messageInput.focus();



}



messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }

});



function gotoMainMenu() {


    aiName = nameInput.value.trim()

    if (aiName === "") {
        alert("Please enter a name!");
        return;
    }

    
    welcomePage.style.display = "none";
    mainMenu.style.display = "block";
}

continueButton.addEventListener("click", gotoMainMenu);

nameInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        gotoMainMenu();
    }

});
