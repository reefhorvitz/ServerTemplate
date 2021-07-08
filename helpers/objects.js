export function getIn(obj, arr, defaultValue = null){
    try{
        let result = obj;
        for (let key of arr){
            result = result[key];
        }
        return result;
    }
    catch (e) {
        return defaultValue;
    }
}

export function arrayToObject(arr, field) {
    let result = {};
    for (let element of arr){
        result[element[field].toString()] = element;
    }
    return result;
}
