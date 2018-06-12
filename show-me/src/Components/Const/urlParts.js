
export const apiKey = 'isarBhPxQUbJnLNhWvn3klmi7JC5EH5W7AmWZNy0' ;
export const domainUrl = 'http://localhost:3000/';

export const MAX_DATE = `${new Date().getFullYear()}-\
${new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}-\
${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}`


export const dateChecker = (date,max,min) => {


    date = date.split('-');
    max = max.split('-');
    min = min.split('-');

    if(date[0]>max[0] || date[1]> max[1] || min[0]>date[0] || date[2]>max[2]){
        alert('Min date 01.01.1996 ,max date is today!')
        return false
    }
    return true


}








