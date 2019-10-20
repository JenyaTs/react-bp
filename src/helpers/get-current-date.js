export const getCurrentDate = (date) => {
    let data = {
        day:  date.getDate(),
        month:  date.getMonth() + 1,
        year:  date.getFullYear()
    }

    return data;
}