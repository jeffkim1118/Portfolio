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

project_likes = {
    'first': 0,
    'second': 0,
    'third': 0,
    'fourth': 0
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


@app.route('/likes', methods=['GET','POST'])
@cross_origin()
def likes(projectIndexNum):
    global project_likes
    if request.method == "POST":
        if projectIndexNum == '1':
            project_likes['first']+=1
        elif projectIndexNum == '2':
            project_likes['second']+=1
        elif projectIndexNum == '3':
            project_likes['third']+=1
        elif projectIndexNum == '4':
            project_likes['fourth']+=1
    if request.method == "GET":
        return project_likes