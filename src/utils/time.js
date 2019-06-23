const SECOND = 1000
const MINUTES = SECOND * 60
const HOUR = MINUTES * 60
const DAY = HOUR * 24
const MONTH = DAY * 30
const YEAR = DAY * 365


export const getDistanceFromTime = time => {
    let timestamp
    if (typeof time === 'string') {
        timestamp = new Date(time).getTime()
    } else if (time instanceof Date) {
        timestamp = time.getTime()
    }
    const distance = new Date().getTime() - timestamp
    if (distance >= YEAR) {
        return `${parseInt(distance / YEAR)}年前`
    } else if (distance >= MONTH) {
        return `${parseInt(distance / MONTH)}个月前`
    } else if (distance >= DAY) {
        return `${parseInt(distance / DAY)}天前`
    } else if (distance >= HOUR) {
        return `${parseInt(distance / HOUR)}小时前`
    } else {
        return '刚刚'
    }
}