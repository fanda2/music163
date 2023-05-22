export function getSizeImage(imgUrl, size) {
    return `${imgUrl}?param=${size}x${size}`
}
// export function getBlurImage(imgUrl,)

export function getCount(count) {
    if (count < 0) 
        return;
    
    if (count < 10000) {
        return count;
    } else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + "万"
    } else {
        return Math.floor(count / 10000000) / 10 + "亿"
    }
}

export function formatDate(time, fmt) {
    let date=new Date(time);
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()

    };
    // 遍历这个对象
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) { // console.log(`${k}`)
            let str = o[k] + '';
            // fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
            fmt=fmt.replace(RegExp.$1, (RegExp.$1.length===1)? str :padLeftZero(str))
        }
    }
    return fmt;
};
function padLeftZero(str) {
    return('00' + str).substr(str.length);
}



export function getPlayMusic(id){
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}