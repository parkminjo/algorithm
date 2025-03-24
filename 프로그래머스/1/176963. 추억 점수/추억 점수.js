function solution(name, yearning, photos) {
    return photos.map(photo => {
        let sum = 0;
        for (let i = 0; i < photo.length; i++) {
            name.indexOf(photo[i]) !== -1 ? sum += yearning[name.indexOf(photo[i])] : sum += 0;
        }
        return sum;
    })
    
}