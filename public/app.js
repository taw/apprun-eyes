let state = 0;
let view = state => {
  return `<div>
    <h1>${state}</h1>
    <button onclick='app.run("-1")'>-1</button>
    <button onclick='app.run("+1")'>+1</button>
  </div>`;
};
let update = {
  '+1': state => state + 1,
  '-1': state => state - 1,
};
app.start(document.body, state, view, update);
