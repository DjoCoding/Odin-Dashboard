function serve(cb, setter) {
    let value = null;
    if(cb) { value = cb(); }
    setter(false);
    return value;
}


export default serve;