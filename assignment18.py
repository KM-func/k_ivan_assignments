list_of_nums = [19, 19, 5,5,5]

def numTracker(list):
    num_of_19 = 0
    num_of_5 = 0
    for item in list:
        if item == 19:
            num_of_19 += 1
        if item == 5:
            num_of_5 += 1
    if num_of_19 == 2 and num_of_5 <= 3:
        print(True)
    else:
        print(False)

numTracker(list_of_nums)