let vars = [9, 2]

function modulusFunc(vars){
    temp_var = vars[0]/vars[1]
    temp_var_2 = vars[0]
    
    for (let i = 0; i < 1+temp_var_2; i++){
        temp_var_2 -= vars[1]
    }

    console.log(temp_var_2)
}

modulusFunc(vars)