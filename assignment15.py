
vars = [9, 2]

def modulusFunc(vars):
    temp_var = int(vars[0] / vars[1])
    temp_var_2 = vars[0]
    for i in range(1, temp_var+1):
        temp_var_2 -= vars[1]
    print(temp_var_2)

modulusFunc(vars)