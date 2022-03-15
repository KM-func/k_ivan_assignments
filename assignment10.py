
#variables for the functions.
min_range = 4 #changed for assignment10
max_range = 6
multiples_of = 2

def multiple_finder(min, max, multiple):
    sum_of_multiples = 0 #empty function to contain the sum of multiples

    for i in range(min, max+1): #don't forget to add a +1 to the max index

        if (i % multiple) == 0: #divide formula to check if i is a multiple
            print(i)
            sum_of_multiples += i #adds this all up to print the sum of all multiples
        else:
            pass

    #return sum_of_multiples #just in case 3 =3
    print(f'Sum of all multiples is: {sum_of_multiples}')

multiple_finder(min_range, max_range, multiples_of) #calling the function