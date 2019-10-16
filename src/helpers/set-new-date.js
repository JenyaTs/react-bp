export const setNewDate = (date, flag) => {    
    let now = date,
        current = null;    
        
    if (now.getMonth() === 11 && flag > 0) {
        current = new Date(now.getFullYear() + 1, 0, 1);
    } else {
        current = new Date(now.getFullYear(), now.getMonth() + flag, 1);
    }

    return current;
}