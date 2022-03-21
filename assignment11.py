
#variables for input
min_num = 2
max_num = 17
divisibles = [2, 3]

#Try to see if I can make this function loop over a list instead of having to add it

def even(min_num, max_num, divisibles):
        
    for num in range(min_num, max_num + 1): #loops over a set minimum and maximum number
        num_of_common_multiples = 0 #variable that checks for how many common multiples there are
        num_of_divisibles = len(divisibles) 
        
        if (num % divisibles[0]) == 0:
            num_of_common_multiples += 1 #indicates that a number is a multiple of an inputted list item 
                
        if (num % divisibles[1]) == 0:
            num_of_common_multiples += 1 #indicates that a number is a multiple of an inputted list item 
        
        #checks if the number is a multiple of either input.
        if (num_of_common_multiples == num_of_divisibles) or (num_of_common_multiples != 0): 
            print(num) #prints the num only if it is divisible by at least one multiple

        else:
            pass

even(min_num, max_num, divisibles) #calling the function



# --- OLD CODE ---
"""
min_num = 2
max_num = 17
num_1 = 2
num_2 = 3

def even(min_num, max_num, divisible_by_num_1, divisible_by_num_2):
        
    for num in range(min_num, max_num + 1):
        output = "" #change to conditional variable?
        
        if (num % divisible_by_num_1) == 0:
            output += "Buzz" #change to true
                
        if (num % divisible_by_num_2) == 0:
            output += "Fuzz" #change to true 
        
        if output == "":
            output = str(num) #make into a: if both is true, then print it too. functions

        else:
            pass

        print(output)
"""