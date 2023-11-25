import time
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

if __name__ == '__main__':
    app.run(host='0.0.0.0')

total_visitors = {
    'counter':0
}

@app.route('/')
def hello_world():
    return "<p>Hello, world</p>"

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/visitor', methods=['GET', 'POST'])
@cross_origin()
def visitors():
    # breakpoint()
    global total_visitors
    if request.method == "POST":
        total_visitors['counter']+=1
        # breakpoint()
        return total_visitors
    elif request.method == 'GET':
        # breakpoint()
        return total_visitors

