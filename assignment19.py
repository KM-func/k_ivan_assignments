str_list = ["lorem", "ipsum", "colbern", "three"]   

def stringLengthFinder(str_list):
    empty_list = []
    for i in str_list:
        empty_list.append(len(i))

    print(empty_list)

stringLengthFinder(str_list)