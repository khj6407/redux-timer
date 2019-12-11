// redux == 모든 컴포넌트들이 공통으로 사용할 수 있는 공간(state)
// react-redux, redux
//=> redux라는 것은 react에서만 구동되는게 아님

// recuder => redux에게 '액션'을 보내는 역할

// 1. import

// 2. Action -> variable area
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

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

const addSecond = () => {
  return {
    type: ADD_SECOND
  };
};
// 4. Reducer (중요)
const initialState = {
  //초기값
  isPlaying: false,
  timerDuration: 1500,
  elapsed: 0
};

/* 이니셜스테이트로 시작을 할거고, 액션을 보낼 때 마다 -> 디폴트 값으로 리듀서를 실행한다. */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
};

// 5. Reducer Function

const applyStartTimer = state => {
  return {
    ...state, //기존의 state를 가져오겠다
    isPlaying: true
  };
};

const applyRestartTimer = state => {
  return {
    ...state,
    isPlaying: false,
    elapsed: 0
  };
};

const applyAddSecond = state => {
  return {
    ...state,
    elapsed: state.elapsed + 1
  };
};
// 6. Export Action Creator

const actionCreator = {
  startTimer,
  restartTimer,
  addSecond
};

export { actionCreator };

// 7. Export Reducer
export default reducer;
