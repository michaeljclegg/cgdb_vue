export function debounce(func, timeout = 300) {
    let timer: any;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
function saveInput() {
    console.log('Saving data');
}
const processChange = debounce(() => saveInput());


/*  //USE FUNCTION LOCALLY
can be used on an input in a component
<input type="text" onkeyup="processChange()" />

can be used on a button in a component
<input type="text" onkeyup="processChange()" />

can be used on a window event (in a component)
window.addEventListener("scroll", processChange)
*/