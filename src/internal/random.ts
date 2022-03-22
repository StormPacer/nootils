export function Random(min: number, max: number, rounding?: number): number {
    if (!rounding) return Number((Math.random() * (max - min) + min).toFixed(4))
    return Number((Math.random() * (max - min) + min).toFixed(rounding))
}