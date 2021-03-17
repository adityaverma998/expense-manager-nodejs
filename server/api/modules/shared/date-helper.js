const convertStringToDate = (dateStr) => {
    var parts = dateStr.split('/')
    return new Date(parts[2], parts[1] - 1, parts[0])
}

const isDateGreaterThanOrEqual = (testDate, baseDate) => {
    return convertStringToDate(testDate).getTime() >= convertStringToDate(baseDate).getTime();
}

const isDateLessThanOrEqual = (testDate, baseDate) => {
    return convertStringToDate(testDate).getTime() <= convertStringToDate(baseDate).getTime();
}

module.exports = {
    convertStringToDate,
    isDateGreaterThanOrEqual,
    isDateLessThanOrEqual
};