import flask
from flask import request, jsonify, Response
from mongo import Mongo
import json
from joblib import load
from sentiment import text_processing
from pusher import Pusher
from pymongo import MongoClient
import datetime
from flask_cors import CORS
import re
import os


pipeline = load("./ML/Models/text_classificationStanford.joblib")

app = flask.Flask(__name__)
app.config["DEBUG"] = True

CORS(app)

# Configure Pusher
pusher = Pusher(
    app_id='',
    key='',
    secret='',
    cluster='',
    ssl=True
)

'''
mongo = Mongo()
documents = mongo.db.posts

with documents.watch() as stream:
    for insert_change in stream:
        print(insert_change)
        resume_token = stream.resume_token
'''


@app.route('/', methods=["GET"])
def homepage():
    return "<h1>Welcome to LinkedinClone API</h1>"


@app.route('/api/v1/posts/sync', methods=["GET"])
def api_all():
    print("GET method", flush=True)
    mongo = Mongo()
    documents = mongo.db.posts.find()
    response = []
    for document in documents:
        document["_id"] = str(document["_id"])
        response.append(document)
    return jsonify(response)


@app.route('/api/v1/posts/new', methods=["POST"])
def insert_post():
    print("New Post Method")
    mongo = Mongo()
    posts_col = mongo.db.posts
    text = request.get_json()

    text['post'] = text['post'].replace("\n", "\n")

    try:
        posts_col.insert_one(text).inserted_id
        # Pusher Trigger
        try:
            pusher.trigger("posts", "inserted", {
                "name": text['name'],
                "post": text['post'],
                "timestamp": text['timestamp'],
                "photoURL": text['photoURL']
            })
            print("Pusher Trigerred")
        except:
            print("Pusher error")
        return "200 ok"
    except:
        return '500'


@app.route('/api/v1/sentiment', methods=["POST"])
def sentiment():
    if request.method == "POST":
        text = request.get_json()
        predict_text = pipeline.predict([text["text"]])
        if predict_text[0] == 0:
            return {"sentiment": "Positive 😄"}
        else:
            return {"sentiment": "Negative 😡"}


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(threaded=True, port=port)
