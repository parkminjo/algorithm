function solution(sizes) {
    const sortedSizes = sizes.map(size => size.sort((a,b) => b - a));
    let widthMax = 0;
    let heightMax = 0;
    sortedSizes.forEach(size => {
        widthMax < size[0] ? widthMax = size[0] : widthMax = widthMax;
        heightMax < size[1] ? heightMax = size[1] : heightMax = heightMax;
    })
    return widthMax * heightMax;
}