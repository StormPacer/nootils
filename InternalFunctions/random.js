function Random(min, max, rounding) {
    if (!rounding) return Number((Math.random() * (max - min) + min).toFixed(4))
    return Number((Math.random() * (max - min) + min).toFixed(rounding))
}

export default Random