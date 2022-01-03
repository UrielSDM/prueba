from flask import Flask


app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from flask"

from controllers.usuarioController import *



if __name__ == "__main__":
    app.run( debug=True )  