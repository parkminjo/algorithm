function solution(sizes) {
    const sortedSizes = sizes.map(([w, h]) => w > h ? [w, h] : [h, w])
    
    let [maxW, maxH] = [0, 0]
    sortedSizes.forEach(([w, h]) => {
        if (maxW < w) maxW = w;
        if (maxH < h) maxH = h;
    })
    return maxW * maxH;
}