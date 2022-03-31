list_of_nums = [1,2,3,4,5]

#this is assuming that the list is forever constant while incrememnting
def monotonicSequences(list_of_nums):
    if list_of_nums[0] > list_of_nums[-1]:
        print("the list of numbers is decreasing")
    elif list_of_nums[0] < list_of_nums[-1]:
        print("the list of numbers is increasing")

monotonicSequences(list_of_nums)