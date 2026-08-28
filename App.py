from openai import OpenAI
from dotenv import load_dotenv
from flask import Flask, render_template, request
import os

load_dotenv()



client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = Flask(__name__)


@app.route("/")

def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])

def chat():
    data = request.get_json()

    message = data["message"]

    response = client.responses.create(
        input=message,
        model="gpt-5-mini"
    )

    return (response.output_text)

def Terminal_App():

    def AI_Chatbot():

        while True:

            request = input(name + ": How can I help? Please text 'quit' if you're done.\nYou:")

            if request.lower() == 'quit':
                print("Ok. Thank you for your time. See you soon. Byeeee! :)")
                break

            else:
                response = client.responses.create(
                    model = "gpt-5-mini",
                    input = request
                    )

            print(name, ": ", response.output_text)

    print("Hello, I am your personalised AI bot. I am here to help with any of your education-related needs.")

    name = input("What would you like my name to be?")

    print("Hi! My name is", name)

    print("Menu: \nOption 1: Chat with me \nOption 2: Create a revision timetable \nOption 3: Quit")

    while True:
        try:
            user_input = int(input("What would you like to do? Type in the number:"))

        except ValueError:
            print("Invalid input entered.")
            continue

        if user_input == 1:
            AI_Chatbot()
            break
        elif user_input == 2:
            print("Revision timetable feature coming soon")
            break

        elif user_input == 3:
            print("Thank you for your time. See you soon. Byeeee! :)")
            break

        else:
            print("Invalid input entered.")
        



if __name__ == "__main__":
    app.run(debug=True)