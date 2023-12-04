import os
import time
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from . import db
import sqlite3

total_visitors = {
    'counter':0
}

project_likes = {
    'first': 0,
    'second': 0,
    'third': 0,
    'fourth': 0
}

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'

    if __name__ == '__main__':
        app.run(host='0.0.0.0')
        
    # a simple page that says hello
    @app.route('/')
    def hello_world():
        return "<p>Hello, world</p>"

    @app.route('/time')
    def get_current_time():
        return {'time': time.time()}

    @app.route('/visitor', methods=['GET', 'POST'])
    def visitors():
        con = db.get_db()
        # breakpoint()
        cur = con.cursor()
        cur.execute("""
                    UPDATE visitorsCounter 
                    SET counter = counter + 1 
                    WHERE id = 1 
                    AND NOT EXISTS (SELECT * FROM visitorsCounter WHERE id = 1 AND counter = 0);
                    """)
        db.close_db()
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
    def likes(projectIndexNum):
        global project_likes
        if request.method == "POST":
            # breakpoint()
            if projectIndexNum == 1:
                project_likes['first']+=1
            elif projectIndexNum == 2:
                project_likes['second']+=1
            elif projectIndexNum == 3:
                project_likes['third']+=1
            elif projectIndexNum == 4:
                project_likes['fourth']+=1
        if request.method == "GET":
            # breakpoint()
            return project_likes
    
    
    db.init_app(app)
    
    return app


    