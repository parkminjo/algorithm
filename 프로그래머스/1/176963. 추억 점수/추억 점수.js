function solution(name, yearning, photos) {
    return photos.map(photo => photo.reduce((acc, cur) => {
        return acc += yearning[name.indexOf(cur)] ?? 0;
    }, 0))
}