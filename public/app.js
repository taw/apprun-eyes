function randomColor() {
  let h = Math.random() * 360;
  let s = Math.round(50 + Math.random() * 50);
  let l = Math.round(30 + Math.random() * 40);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function eyeDistance(eye1, eye2) {
  let dx = eye1.x - eye2.x;
  let dy = eye1.y - eye2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function canPlaceEye(eyes, newEye) {
  return eyes.every(
    (eye) => eyeDistance(eye, newEye) >= eye.sz + newEye.sz + 5
  );
}

function randomEye() {
  let ww = window.innerWidth;
  let wh = window.innerHeight;
  let sz = 20 + Math.random() * 60;
  let x = sz + Math.random() * (ww - 2 * sz);
  let y = sz + Math.random() * (wh - 2 * sz);
  let color = randomColor();
  return { x, y, sz, color };
}

function createEyes() {
  let eyes = [];
  [...Array.from({ length: 1000 })].forEach((_) => {
    let newEye = randomEye();
    if (canPlaceEye(eyes, newEye)) {
      eyes.push(newEye);
    }
  });
  return eyes;
}

class App extends Component {
  state = {
    eyes: [],
    mx: 0,
    my: 0,
  };
  view = (state) => {
    let { mx, my, eyes } = state;
    let onmousemove = () => {
      console.log("MM");
    }
    return `<div id="eyes">
      ${eyes.map(
        ({ x, y, color, sz }) => `
          <spooky-eye x=${x} y=${y} color="${color}" sz=${sz} mx=${mx} my=${my}></spooky-eye>
        `
      ).join("")}
    </div>`;
  };
  mounted = (props, children, state) => {
		let ww = window.innerWidth;
    let wh = window.innerHeight;
    state.mx = Math.random() * ww;
    state.my = Math.random() * wh;
    state.eyes = createEyes();
  };
}
app.webComponent("eyes-app", App);
