import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Countdown from 'react-native-countdown-component';

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(25 * 60); // Tempo inicial de 25 minutos

  const addTime = () => {
    setTime(prevTime => prevTime + 5 * 60);
  };

  const subtractTime = () => {
    setTime(prevTime => Math.max(prevTime - 5 * 60, 0));
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(25 * 60);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro Timer</Text>
      <Countdown
        until={time}
        size={30}
        onFinish={() => alert('Pomodoro finalizado!')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        running={isRunning}
      />
      <View style={styles.buttonContainer}>
        <Button title={isRunning ? "Pausar" : "Iniciar"} onPress={() => setIsRunning(!isRunning)} />
        <Button title="+ 5 min" onPress={addTime} />
        <Button title="- 5 min" onPress={subtractTime} />
        <Button title="Resetar" onPress={resetTimer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
