import Timer from "./timerPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";

// 1. state 받아오기
mapStateProps = state => {
  const { isPlaying, timerDuration, elapsed } = state;

  console.log(isPlaying, timerDuration, elapsed);

  return {
    isPlaying,
    timerDuration,
    elapsed
  };
};

//elapsed 순서
//reducer에 state만들어지고,
//return
//return한걸 index에서 state받아오고 -> state==>props(필요한 것만 받아옴)
//return
//presenter에서 state를 props로 받아오고
//console.log

// 2. function 받아오기
//dispatch : 전달받은 function
//tomatoActions : reducer를 의미
//전달받은 startTimer과 startTimer를 연결하겠다
mapDispatchToProps = dispatch => {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
};

// result : 받아온 녀석과 Timer를 함께 리턴하기

export default connect(mapStateProps, mapDispatchToProps)(Timer);
