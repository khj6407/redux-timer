import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  time -= minutes * 60;

  var seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return;
}

class Timer extends React.Component {
  //props가 바뀔때 검증해야 함.
  //검증하는 방법 Lifecycle
  shouldComponentUpdate = (nextProps, nextState) => {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.interval);
    }
    return true;
  };

  render() {
    const {
      isPlaying,
      timerDuration,
      startTimer,
      restartTimer,
      elapsed,
      addSecond
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.upArea}>
          <Text style={styles.time}>{formatTime(timerDuration - elapsed)}</Text>
        </View>

        <View style={styles.downArea}>
          {isPlaying ? (
            <Button iconName="stop-circle-o" action={restartTimer} />
          ) : (
            <Button iconName="play-circle-o" action={startTimer} />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  upArea: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  downArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    fontSize: 40
  }
});
export default Timer;
