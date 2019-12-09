// 1. import

// 2. Action -> variable area
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";

// 3. Action Creator -> How to working?
const startTimer = () => {
  return {
    type: START_TIMER
  };
};

const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};
// 4. Reducer (중요)
const initialState = {
  isPlaying: false,
  timerDuration: 1500
};

/* 이니셜스테이트로 시작을 할거고, 액션을 보낼 때 마다 -> 디폴트 값으로 리듀서를 실행한다. */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    default:
      return state;
  }
};

// 5. Reducer Function

const applyRestartTimer = state => {
  return {
    ...state, //기존의 state를 가져오겠다
    isPlaying: true
  };
};

const applyRestartTimer = state => {
  return {
    ...state,
    isPlaying: false
  };
};

// 6. Export Action Creator

const actionCreator = {
  startTimer,
  restartTimer
};

export { actionCreator };

// 7. Export Reducer
export default reducer;
