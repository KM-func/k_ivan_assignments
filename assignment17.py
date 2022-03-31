from numpy import var


vars = [0, 1]

def functionIntegerChecker(list_of_nums):
    has_seven_or_four = False
    for i in list_of_nums:
        if i == 7 or i == 4:
            has_seven_or_four = True
    
    if has_seven_or_four == True:
        print('the list has a seven and/or four')
    else:
        print('the list does not have a seven or four')

functionIntegerChecker(vars)