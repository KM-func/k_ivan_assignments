sentence = "how much wood could a wood chuck chuck in llanfairpyllgwyngthllygogeryquindrobothlllanthesyliogogogoch"

def titleCaseConverter(sentence):
    listOfWords = sentence.split()
    tempList = []
    for word in listOfWords:
        converted = word.capitalize()
        tempList.append(converted)
    print(" ".join(tempList))
    

titleCaseConverter(sentence)