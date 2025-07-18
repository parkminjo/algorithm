function solution(idPw, db) {
    const [id, pw] = idPw;
    const map = new Map(db);
    
    return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}