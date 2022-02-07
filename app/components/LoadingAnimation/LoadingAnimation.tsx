import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    Easing,
    useSharedValue,
    withTiming,
    withRepeat,
    withSpring,
    withSequence,
    Extrapolate,
} from 'react-native-reanimated';

const { width: wWidth } = Dimensions.get('window');
const width = 40;
const size = 8;
const styles = StyleSheet.create({
    container: {
        height: width,
        width,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#d3d3d3",
    },
    bubble: {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: '#FFFFFF',
    },
});

interface BubbleProps {
    progress: Animated.SharedValue<number>;
    start: number;
    end: number;
}

const Bubble: React.FC<BubbleProps> = ({ start, end, progress }): JSX.Element => {
    const rBubbleStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            progress.value,
            [start, end],
            [0.5, 1],
            Extrapolate.CLAMP
        );

        return {
            opacity,
        };
    });

    return (
        <Animated.View
            style={[styles.bubble,  rBubbleStyle]}
        />
    );
};

export const LoadingAnimation = () => {
    const bubbles = [0, 1, 2];
    const delta = 1 / bubbles.length;
    const progress = useSharedValue(0);
    const offset = useSharedValue(0);
    const backgroundColor = useSharedValue(0);
    const sharedWidth = useSharedValue(width);
    const rContainerStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(backgroundColor.value, [0,1], ['#008ACE', '#DD6B55']),
            transform: [{translateX: withSpring(offset.value, {
                    damping: 20,
                    stiffness: 90,
                }),}],
            width: sharedWidth.value,
        };
    }, []);

    useEffect(() => {
        progress.value = withRepeat(
            withTiming(1,
                {duration: 700, easing: Easing.inOut(Easing.ease)},
                (finished, currentValue) => {
                if (finished) {
                    console.log('current withRepeat value is ' + currentValue);
                } else {
                    console.log('inner animation cancelled');
                }
            }),
            10,
            true,
            (finished) => {
                const resultStr = finished
                    ? 'All repeats are completed'
                    : 'withRepeat cancelled';
                offset.value = withSequence(withTiming(20),
                    withTiming(-20),
                    withTiming(0, undefined, (isFinished => {
                            backgroundColor.value = withTiming(1);
                            sharedWidth.value = withTiming(wWidth/2);
                        })));
                console.log(resultStr);
            }
        );
    }, []);

    return (
        <Animated.View style={[styles.container, rContainerStyle]}>
            {bubbles.map((i) => {
                const start = i * delta;
                const end = start + delta;
                return (
                    <Bubble
                        key={i}
                        {...{ start, end, progress }}
                    />
                );
            })}
        </Animated.View>
    );
};
