class Eye extends Component {
  state = {};
  view = (state) => {
    let x = state.x;
    let y = state.y;
    let sz = state.sz;
    let color = state.color;

    let props = this._props;
    let mx = +props.mx;
    let my = +props.my;

    let max_eye_movement = 0.3 * sz;
    let dx = mx !== null ? mx - x : 0;
    let dy = my !== null ? my - y : 0;
    let dl = Math.max(0.000001, Math.sqrt(dx * dx + dy * dy));
    let displacement = Math.min(max_eye_movement, dl);
    let rx = x + (dx / dl) * displacement;
    let ry = y + (dy / dl) * displacement;

    return `
    <svg>
      <g>
        <circle class="eye1" cx=${x} cy=${y} r=${sz}></circle>
        <circle class="eye2" cx=${rx} cy=${ry} r=${sz * 0.5} style="fill: ${color}"></circle>
        <circle class="eye3" cx=${rx} cy=${ry} r=${sz * 0.2}></circle>
      </g>
    </svg>`
  }
  mounted = (props, children, state) => {
    state.x = +props.x;
    state.y = +props.y;
    state.sz = +props.sz;
    state.color = props.color;
  }
  update = {
    "+1": (state) => state + 1,
    "-1": (state) => state - 1,
  };
}
app.webComponent("spooky-eye", Eye);
