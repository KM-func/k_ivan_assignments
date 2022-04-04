sentence = "how much wood could a wood chuck chuck in llanfairpyllgwyngthllygogeryquindrobothlllanthesyliogogogoch"

def titleCaseConverter(sentence):
    list_of_words = sentence.split()
    temp_list = []
    for word in list_of_words:
        converted = word.capitalize()
        temp_list.append(converted)
    print(" ".join(temp_list))
    

titleCaseConverter(sentence)