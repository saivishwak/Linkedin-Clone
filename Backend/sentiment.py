import re
from nltk.stem.wordnet import WordNetLemmatizer
from gensim.parsing.preprocessing import remove_stopwords
import gensim

all_stopwords = gensim.parsing.preprocessing.STOPWORDS


def text_processing(tweet):

    # Generating the list of words in the tweet (hastags and other punctuations removed)
    new_tweet = "".join(re.sub(r"[-()\"#/@;:<>{}=~|.?,^]", '', tweet))

    # Removing stopwords and words
    def no_user_alpha(tweet):
        tweet_list = [ele for ele in tweet.split() if ele != 'user']
        clean_tokens = [t for t in tweet_list if re.match(r'[^\W\d]*$', t)]
        clean_s = ' '.join(clean_tokens)
        clean_mess = [word for word in clean_s.split() if word.lower()
                      not in all_stopwords]
        return clean_mess
    no_punc_tweet = no_user_alpha(new_tweet)

    # Normalizing the words in tweets
    def normalization(tweet_list):
        lem = WordNetLemmatizer()
        normalized_tweet = []
        for word in tweet_list:
            normalized_text = lem.lemmatize(word, 'v')
            normalized_tweet.append(normalized_text)
        return normalized_tweet

    return normalization(no_punc_tweet)
