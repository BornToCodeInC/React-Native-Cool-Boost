/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, View, Animated, Easing} from 'react-native';
import {v4 as uuid} from 'uuid';
import {getRandom} from '../../helpers/utils';

export const Fireworks: React.FC = (): JSX.Element => {
  const [fadingOpacity, setFadingOpacity] = useState(new Animated.Value(1));
  const [movingBall, setMovingBall] = useState(new Animated.Value(0));
  const [explosionCoordinates, setExplosionCoordinates] = useState({
    x: [],
    y: [],
  });
  const balls = new Array(30).fill('');
  const ballOpacity = fadingOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const density = 5;
  const randomTops = [];
  const randomLefts = [];
  const randomColors = balls.map(() => {
    randomTops.push(
      movingBall.interpolate({
        inputRange: [0, 1],
        outputRange: [100, getRandom(200)],
      }),
    );
    randomLefts.push(
      movingBall.interpolate({
        inputRange: [0, 1],
        outputRange: [100, getRandom(200)],
      }),
    );
    return `rgb(${getRandom(255)},${getRandom(255)},${getRandom(255)})`;
  });

  useEffect(() => {
    setExplosionSpots();
    animateOpacity();
    animateBall();
  }, []);

  const setExplosionSpots = () => {
    const xSeed = Dimensions.get('window').width;
    const ySeed = Dimensions.get('window').height;
    const x = [...new Array(density)].map(() => getRandom(xSeed / 2));
    const y = [...new Array(density)].map(() => getRandom(ySeed / 2));

    setExplosionCoordinates({x: x, y: y});
  };

  const animateOpacity = () => {
    fadingOpacity.setValue(1);
    Animated.timing(fadingOpacity, {
      toValue: 0,
      duration: 700,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => animateOpacity());
  };

  const animateBall = () => {
    movingBall.setValue(0);
    Animated.timing(movingBall, {
      toValue: 1,
      duration: 700,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => animateBall());
  };

  return (
    <View>
      {explosionCoordinates.x.map((item, index) => {
        return (
          <View
            key={uuid()}
            style={{
              top: explosionCoordinates.y[index],
              left: explosionCoordinates.x[index],
              backgroundColor: 'deeppink',
            }}>
            <View style={styles.explosionBoundary}>
              {balls.map((ball: string, index: number) => {
                return (
                  <Animated.View
                    key={uuid()}
                    style={[
                      styles.ball,
                      {
                        top: randomTops[index],
                        left: randomLefts[index],
                        opacity: ballOpacity,
                        backgroundColor: randomColors[index],
                      },
                    ]}
                  />
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  explosionBoundary: {
    position: 'absolute',
    height: 200,
    width: 200,
  },
  ball: {
    position: 'absolute',
    height: 7,
    width: 7,
    borderRadius: 3,
  },
});
