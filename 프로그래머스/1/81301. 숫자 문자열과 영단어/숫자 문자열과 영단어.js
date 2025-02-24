function solution(s) {
    const words = ["zero", "one", "two", "three", "four", 
                   "five", "six", "seven", "eight", "nine"];

    words.forEach((word, index) => {
        s = s.replaceAll(word, index);
    });

    return parseInt(s);
}

