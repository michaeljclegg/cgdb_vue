
/**
 * Function to produce UUID.
 * See: http://stackoverflow.com/a/8809472
 */
export const generateUUID = () => {
    let d = new Date().getTime();
    d += performance.now();


    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return uuid;
}

//--------------------------------
// NOTE function bellow runs the code in Quokka
//loop set x3  

var loop = function () {
    let loops = 0;
    while (loops < 3) {
        generateUUID()
        loops++;
    }
};
// nameless IIFE (Immediately Invoked Function Expression)
(() => {
    loop()
})()


