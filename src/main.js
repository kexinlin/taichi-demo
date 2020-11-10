let html = document.querySelector('#demo');
let style = document.querySelector("#style");

let string = `
/* Hi! My name is Kexin Lin. 
 * I am a computer science specialist student at University of Toronto. 
 * I like coding. I like front end. 
 * I am gonna add something here. 
 * How about... a div tag?
 */
#div1 {
    border: 1px solid grey;
    width: 200px;
    height: 200px;
}
/* Next, I am gonna turn that div into a Taichi diagram.
 * What should I do... Turn it into a circle first.
 */
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* A black-and-white pattern is used to represent the Taichi as 
 * harboring Dualism, yin and yang (dark and bright).
 */
#div1 {
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* Add two small circles of opposite colors.
 * This means yang in yin, and yin in yang. Just like in brightness, darkness
 * can always be found, and in darkness, brightness can always be found.
 */
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, 
  rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;


let string2 = ''

n = 0;
let step = () => {
  setTimeout(() => {
    if(string[n] === '\n') {
      string2 += '<br>';
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999)
    html.scrollTo(0, 99999)
    n++;
    if (n < string.length) {
    step();
    } else {}
  }, 50);
}

step();


