

#Variables that you can change
max_fruits = 3
text_prompt = 'Hello! please insert fruit number '

def fruit_log(num_of_fruits, text_prompt):

    #Empty list of fruits
    fruits = []

    #This runs the main functionality of the program
    for i in range(1, num_of_fruits+1):
        new_fruit = input(f'{text_prompt} {i}: ')
        fruits.append(new_fruit)
    
    return fruits

print(fruit_log(max_fruits, text_prompt))