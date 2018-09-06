function encode(data) {
    let count = 1, encoded = ''
    data.split('').forEach((v, i, s) => {
        const dup = v === s[i + 1] || ''
        encoded += dup ? '' : (count > 1 ? count : '') + v
        count = dup ? count + 1 : 1
    })
    return encoded
}

function decode(data) {
    if (!data) {
        return ''
    }

    let count = 0, decoded = ''
    data.match(/[\d]+|[A-Za-z ]/g).forEach(v => {
        decoded += Number(v) ? '' : count ? v.repeat(count) : v
        count = Number(v) ? v : 0
    })
    return decoded
}

export { encode, decode }
