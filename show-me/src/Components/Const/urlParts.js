
export const apiKey = 'isarBhPxQUbJnLNhWvn3klmi7JC5EH5W7AmWZNy0' ;
export const domainUrl = 'http://localhost:3000/';

export const MAX_DATE = `${new Date().getFullYear()}-\
${new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}-\
${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}`


export const dateChecker = (date,max) => {


    date = date.split('-');
    max = MAX_DATE.split('-');

    if(date[0]>max[0] || date[1]> max[1] || date[2]>max[2]){
        alert('Date cannot contain a future time')
        return false
    }

    return true


}

export const EARTH_LINK_PARTS = {
    BASE: 'https://api.nasa.gov/planetary/earth/imagery',
    LON:'lon=',
    LAT:'&lat=',
    DATE:'&date=',
    CLOUD_SCORE:'&cloud_score=',
    API_KEY:'&api_key='
       
}






