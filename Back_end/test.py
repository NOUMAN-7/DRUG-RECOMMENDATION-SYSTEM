# from flask_ngrok import run_with_ngrok
from flask import Flask
from flask import Flask, app, request
import json

from base64 import b64decode, b64encode
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
cors = CORS(app)
# run_with_ngrok(app)   #starts ngrok when the app is run
@app.route('/drug', methods=['GET','POST'])
def a():
    data = request.json['uri']
    print(data)
    # r = requests.post("http://1bf6-35-229-37-124.ngrok-free.app/drug", data={'uri': data})
    r = requests.post("http://7d54-34-69-2-166.ngrok-free.app/drug", data={'uri': data})
    return r.json()
    # return {'data': True}
    
if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)