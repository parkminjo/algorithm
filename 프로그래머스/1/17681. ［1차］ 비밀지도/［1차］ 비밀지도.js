function solution(n, arr1, arr2) {
    const map1 = arr1.map(num => {
        if (num.toString(2).length < n) {
            let binary = num.toString(2);
            for (let i = 0; i < n - num.toString(2).length; i++) {
                binary = "0" + binary;
            }
            return binary;
        }
        return num.toString(2);
    });
    
    const map2 = arr2.map(num => {
        if (num.toString(2).length < n) {
            let binary = num.toString(2);
            for (let i = 0; i < n - num.toString(2).length; i++) {
                binary = "0" + binary;
            }
            return binary;
        }
        return num.toString(2);
    });
    
    const answer = map1.map((binary, idx) => {
        let binaryArr = binary.split("");
        for (let i = 0; i < map2[idx].length; i++) {
            if (binaryArr[i] === "0" && map2[idx][i] === "0") {
                binaryArr[i] = " ";
            } else {
                binaryArr[i] = "#";
            }
        }
        return binaryArr.join("")
    })
    return answer;
}