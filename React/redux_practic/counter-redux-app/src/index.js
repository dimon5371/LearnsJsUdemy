import {createStore} from 'redux';




const store = {
  value: 0,
  subscribeF: null,
  getState() {
    return this.value;
  },
  subscribe(subscribeF) {
    return subscribeF();
  },
  dispatch(func) {
     this.value = reduce(this.value,func);
     this.subscribe(this.subscribeF);

  },
};

const reduce = (state = 0, action) => {
  switch (action.type) {
    case "INC":
        return state + 1;
        break;
  
      case 'DEC':
      return state -1;
      break;
  
      case 'RES':
        return state = 0
      default:
        return state;
  }
};

const reduxStore = new createStore(reduce);



const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const res = () => ({ type: "RES" });

document.getElementById("inc").addEventListener("click", () => {
 // store.dispatch(dec());
  reduxStore.dispatch(dec());
});
document.getElementById("res").addEventListener("click", () => {
  const value = 0;
 // store.dispatch(res());
  reduxStore.dispatch(res());
});
document.getElementById("dec").addEventListener("click", () => {
 // store.dispatch(inc());
  reduxStore.dispatch(inc());
});

const update = () => {
 // document.getElementById("counter").textContent = store.getState();
  document.getElementById("counter").textContent = reduxStore.getState();
};


store.subscribeF = update;

reduxStore.subscribe(update);

//store.dispatch({ type: "INC" });
//store.dispatch({ type: "INC" });
//store.dispatch({ type: "INC" });
