function solution(idPw, db) {
    const [id, pw] = idPw
    
    for (const [dbId, dbPw] of db) {
        if (dbId === id) {
            if (dbPw === pw) return "login";
            else return "wrong pw"
        }
    }
    
    return "fail";
}