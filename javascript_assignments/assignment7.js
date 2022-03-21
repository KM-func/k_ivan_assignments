let grades_array = [95, 92, 94, 91, 90]

function gradeAverageCalc(arr){
    grade_sum = 0
    for (i = 0; i < arr.length; i++){
        grade_sum += arr[i]
    }
    console.log(grade_sum / arr.length)
    
}

gradeAverageCalc(grades_array)