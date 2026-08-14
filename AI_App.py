from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

print("Hello, I am your personalised AI bot. I am here to help with any of your education-related needs.")

name = input("What would you like my name to be?")

print("Hi! My name is", name)



while True:

    request = input(name + ": How can I help? Please text 'quit' if you're done.\n You:")

    if request.lower() == 'quit':
        print("Ok. Thank you for your time. See you soon. Byeeee! :)")
        break

    else:
        response = client.responses.create(
            model = "gpt-5-mini",
            input = request
            )

    print(name, ": ", response.output_text)
  
