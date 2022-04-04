sentence = "abc def ghi jkl mno pqr stu vwx yz"

function titleCaseConverter(sentence){
    let list_of_words = sentence.split(" ")

    // FIX THIS FOR LOOP before I proceed
    for (i = 0; i < list_of_words.length ; i++){

        // I don't think this counts. I copy-pasted this code from freecodecamp online
    list_of_words[i] = list_of_words[i][0].toUpperCase() + list_of_words[i].substr(1);
    }

    console.log(list_of_words.join(" "));
}

titleCaseConverter(sentence);