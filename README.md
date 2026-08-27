# 🤖 Personalised AI Timetable Maker

A personalised AI educational assistant built using **Python, Flask, HTML, CSS and JavaScript**.

The project is designed to provide students with an interactive AI assistant that can support their education and revision. The user can choose a name for their AI assistant and communicate with it through a web-based chatbot interface.

## 🚀 Current Features

* 🤖 Personalised AI assistant with a user-selected name
* 💬 Web-based chatbot interface
* 📝 User message bubbles
* 💻 HTML, CSS and JavaScript frontend
* 🐍 Python backend using Flask
* 🔐 API key stored securely using an environment variable
* 🎨 Custom-designed user interface

## 🛠️ Technologies Used

* **Python** — Backend programming
* **Flask** — Web application framework
* **OpenAI API** — AI functionality
* **HTML** — Webpage structure
* **CSS** — Styling and layout
* **JavaScript** — User interaction and dynamic messages
* **python-dotenv** — Secure environment variable management
* **Git & GitHub** — Version control and project development

## 📁 Project Structure

```text
AI App/
│
├── App.py
│
├── static/
│   ├── Script.js
│   └── Style.css
│
├── templates/
│   └── index.html
│
├── .gitignore
└── README.md
```

## 🔐 API Key Security

The OpenAI API key is **not stored directly in the Python source code**.

Instead, the project uses an environment variable stored in a `.env` file:

```text
OPENAI_API_KEY=your_api_key_here
```

The `.env` file is excluded from Git using `.gitignore`, preventing the API key from being uploaded to the public repository.


## ▶️ Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/SreyaS-22/Timetable-Maker.git
```

### 2. Install the required packages

```bash
pip install openai python-dotenv flask
```

### 3. Create a `.env` file

Create a file named:

```text
.env
```

Then add your own API key:

```text
OPENAI_API_KEY=your_api_key_here
```

### 4. Run the Flask application

```bash
python App.py
```

Flask will provide a local address, usually:

```text
http://127.0.0.1:5000
```

Open this address in your browser to use the application.

## 🧠 How It Works

The project combines several technologies to create the application:

1. **HTML** creates the structure of the webpage.
2. **CSS** controls the appearance of the chatbot and message bubbles.
3. **JavaScript** handles user interaction, including the personalised welcome screen and dynamically creating messages.
4. **Flask** connects the webpage to the Python backend.
5. **Python** handles the application logic and communicates with the OpenAI API.

## 🔮 Future Development

The project is currently being developed and will be expanded with additional educational features.

Planned improvements include:

* 📚 AI-generated revision timetables
* 📊 Personalised revision based on areas of weakness
* 📝 Support for exam timetables
* 🎯 More personalised study recommendations
* 💬 Full AI chatbot communication through the web interface
* 📅 Study planning and organisation tools

## 📌 Project Status

**Currently in development.**

The project has progressed from a terminal-based Python chatbot to a Flask-based web application with a dedicated HTML, CSS and JavaScript frontend.

More features will be added as development continues.

## 👩‍💻 Author

**Sreya S.**

This project is being developed as a personal programming and AI project to explore **Python, web development, APIs, artificial intelligence and educational technology**.
