function solution(s, n) {
    return s.split("").map((char) => {
        if (char === " ") return " "; // 공백은 그대로 둠
        
        let code = char.charCodeAt(); // 현재 문자 코드값 저장
        let isUpperCase = code >= 65 && code <= 90; // 대문자인지 확인
        let isLowerCase = code >= 97 && code <= 122; // 소문자인지 확인

        if (isUpperCase) {
            return String.fromCharCode(((code - 65 + n) % 26) + 65);
        } 
        if (isLowerCase) {
            return String.fromCharCode(((code - 97 + n) % 26) + 97);
        }
        
        return char; // 혹시라도 알파벳이 아닌 경우 원래 문자 반환
    }).join("");
}