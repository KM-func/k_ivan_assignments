vars = [1,2,3,4,5,6,6,7,2]

def firstAndLastChecker(list):
    if list[0] == list[-1]:
        print('same')
    else:
        print('not same')

firstAndLastChecker(vars)