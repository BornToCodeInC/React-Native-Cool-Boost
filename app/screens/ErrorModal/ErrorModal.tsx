import React, {useEffect} from 'react';
import {StyleSheet, Modal, Text, View, Pressable} from 'react-native';
import {Icon} from '../../components/icons/Icon';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';

interface Props {
  isVisible: boolean;
  dismiss: () => void;
  title: string;
  iconName: string;
  iconColor: string;
  description?: string;
}

export const ErrorModal: React.FC<Props> = ({
  isVisible,
  dismiss,
  title,
  iconName,
  iconColor,
  description = '',
}): JSX.Element => {
  const modalOpacity = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: (event, ctx) => {
        ctx.startX = translateX.value;
        ctx.startY = translateY.value;
      },

      onActive: (event, ctx) => {
        translateX.value = ctx.startX + event.translationX;
        translateY.value = ctx.startY + event.translationY;
      },
      onEnd: event => {
        translateX.value = withSpring(0);
        const distance = Math.sqrt(
          translateX.value ** 2 + translateY.value ** 2,
        );
        if (distance > 200) {
          translateY.value = withSpring(0);
        }
      },
    });

  const rModalStyle = useAnimatedStyle(() => {
    const opacity = withSpring(modalOpacity.value);

    return {
      opacity,
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const ModalContentWithHoc = gestureHandlerRootHOC(() => (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={[styles.modal, rModalStyle]}>
        <Icon name={iconName} size={65} color={iconColor} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Pressable style={styles.button} onPress={dismiss}>
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>
      </Animated.View>
    </PanGestureHandler>
  ));

  useEffect(() => {
    modalOpacity.value = 1;
  }, []);
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={dismiss}>
        <View
          style={[
            {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              ...StyleSheet.absoluteFillObject,
            },
          ]}
        />
        <ModalContentWithHoc />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 55,
    backgroundColor: '#E5E5E5',
  },
  modal: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: '#8F8F8F',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    marginVertical: 10,
  },
  description: {
    color: '#8F8F8F',
    fontSize: 15,
    lineHeight: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    width: 125,
    backgroundColor: '#008ACE',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 16,
    color: '#FFFFFF',
  },
});
