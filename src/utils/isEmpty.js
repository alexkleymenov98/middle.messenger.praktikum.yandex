function isEmpty(value) {
    const typesName = ['number','boolean'];
    const types = [null, undefined];
    if(typesName.includes(typeof value) || types.includes(value) ){
        return true;
    }
    if(typeof value === 'string'){
        return value === '';
    }
    if(Array.isArray(value)){
        return !value.length;
    }
    if(value instanceof Map || value instanceof Set){
        return !value.size;
    }
    if(typeof value === 'object'){
        return !Object.keys(value).length
    }
}

export default isEmpty;