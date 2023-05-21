export function dateFormat(date1:any) {
    const date = new Date(date1)
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours())
    const minutes = String(date.getMinutes())
    return `${month}-${day}/ ${hour.length == 1 ? "0" + hour : hour}h${minutes.length == 1 ? "0" + minutes : minutes}`;
}