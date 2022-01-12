function first(list) {
    if(Array.isArray(list) && list.length){
        return list[0];
    }
    return undefined;
}

export default first;
