import requests
from flask import Flask

app = Flask(__name__)

@app.route("/")
def call_service():
    try:
        response = requests.get("http://app2:5001")
        return f"Response from app2: {response.text}"
    except Exception as e:
        return str(e)

app.run(host="0.0.0.0", port=5000)