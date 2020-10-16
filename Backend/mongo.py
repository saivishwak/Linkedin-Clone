from pymongo import MongoClient


class Mongo:
    def __init__(self):
        self.client = MongoClient(
            "paste here")
        # db = client.admin
        self.db = self.client.get_database('linkedin_posts')
