start_num = 1
end_num = 20


def num_loop_even(min, max):
    #defining start and end variables
    
    #iterating over start and end range
    for i in range(min, max+1):
        #checks for even numbers
        if i%2 == 0:
            print(i)
        else:
            pass

num_loop_even(start_num, end_num)