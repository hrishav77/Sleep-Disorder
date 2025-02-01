import nltk
import numpy as np
nltk.download('punkt')
from nltk.stem.porter import PorterStemmer

stemmer=PorterStemmer()

def tokenize(sentence):
    return nltk.word_tokenize(sentence)

def stem(word):
    return stemmer.stem(word.lower())


def bagOfWords(tokenizedSentences,allWords):
    sentence_words = [stem(word) for word in tokenizedSentences]
    bag = np.zeros(len(allWords), dtype=np.float32)
    for idx, w in enumerate(allWords):
        if w in sentence_words: 
            bag[idx] = 1

    return bag

# a="how long does shipping take"
# print(a)
# a=tokenize(a)
# print(a)
# for word in a:
#     print(stem(word))

