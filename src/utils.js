export const onChangeColor = (data) => {
    let color = '';
    if (Math.round(data) <= 0) {
        color = '#00ffff'
    } else if (Math.round(data) < 10) {
        color = '#e7e7d2'
    } else if (Math.round(data) >= 10 && Math.round(data) <= 30) {
        color = '#fff700'
    } else if (Math.round(data) > 30) {
        color = '#ff8c00'
    }
    return color;
}