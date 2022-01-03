from flask import Flask
from flask import request
from models.UsuarioRepository import *

app = Flask(__name__)

@app.route("/crearUsuario",methods=["POST"])
def crearUsuario():

    parameters = request.json

    usuario = {}

    usuario["name"] = parameters["name"]

    usuario =  crearUsuarioBD( usuario )

    return {"status":"success","usuario":usuario}
