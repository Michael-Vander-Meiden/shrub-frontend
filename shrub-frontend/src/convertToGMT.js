export function convertToGMT(epochMilliseconds) {
    
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCMilliseconds(epochMilliseconds)
    
    return d.toString()

};