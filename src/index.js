import {createStore} from "redux";

const reduser = (state = 0, action) => {
  switch(action.type) {
    case "INC":
      return state +1;
    case "DEC":
      return state - 1;
    case "RND":
      return state + action.value;
    default:
      return state;
  }
};

const store = createStore(reduser);

document.getElementById("inc").addEventListener("click", () => {
  store.dispatch({type: "INC"});
});

document.getElementById("dec").addEventListener("click", () => {
  store.dispatch({type: "DEC"});
});

document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10)
  store.dispatch({type: "RND", value});
});

const update = () => {
  document.getElementById("counter").textContent = store.getState();
};

store.subscribe(update);