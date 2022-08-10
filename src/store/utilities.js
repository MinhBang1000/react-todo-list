const formatElement = (variable) => {

    return Number(variable) - 10 < 0 ? String("0"+variable) : variable

}

export const formatDate = (date) => {

    return [ date.getFullYear(), formatElement(Number(date.getMonth()) + 1), formatElement(date.getDate()) ].join("-")

}