
        
def general_average_calculator():

    #variable_properties = { num_of_subjects:{}, raw_sub_grade:{}}

    num_of_subjects = input('How many subjects do you have?: ')

    #converts the number itself; no input validation or error handling yet
    converted_num_subj = int(num_of_subjects) 
    
    list_of_grades = []
    for i in range(converted_num_subj):

        # raw_sub_grade = input_validator_func(variable)
        # list_of_grades.append(raw_sub_grade)

        grade = int(input(f"please enter grade for subject {i+1}: "))
        list_of_grades.append(grade)

    #the formula proper
    grade_sum = sum(list_of_grades)
    grade_average = grade_sum/converted_num_subj

    #prints the average grade itself
    print(grade_average)

general_average_calculator()

"""

------ OLD CODE ------

#Dictionary for input validation
variables = {"subject_num":{
        "var": "num of subjects", # variable name
        "validation": str.isdigit, # validation condition
        "type": int # proper variable type
    }}

#Input validation and error handling function.
#   taken from a previous programming activity.
    
def input_validator(variables):
    #looping over the input validation dictionary
    for var, info in variables.items():     
        while True:
            user_input = input(f"please enter the {info['var']} \n ")
            if info["validation"](user_input):
                valueReturn = int(user_input)
                break
            else:
                print("--- Invalid input ---", end="\n")
    # can be scaled to validate multiple varibles. just make valueReturn an empty list
    return valueReturn 

"""