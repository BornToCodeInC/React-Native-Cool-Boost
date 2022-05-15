import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {Header} from '../../components/Header/Header';
import {IconBasket} from '../../components/icons/IconBasket';
import {IconArrowLeft} from '../../components/icons/IconArrowLeft';
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';
import {InputWithLabel} from '../../components/InputWithLabel/InputWithLabel';
import {WarningModal} from '../WarningModal/WarningModal';
import {setUserProfile, signOut} from '../../actions/AuthAction';
import {AuthContext} from '../../contexts/AuthContext';
import {useFocusEffect} from '@react-navigation/native';
import Analytics from 'appcenter-analytics';

const AVATAR_PLACEHOLDER = require('../../../assets/images/camera.png');

export const ProfileScreen: React.FC = ({route, navigation}): JSX.Element => {
  const {state, dispatch} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [fullName, setFullName] = useState(state.userProfile.fullName);
  const [phone, setPhone] = useState(state.userProfile.phone);
  const [city, setCity] = useState(state.userProfile.city);
  const [street, setStreet] = useState(state.userProfile.street);
  const [building, setBuilding] = useState(state.userProfile.building);
  const [avatar, setAvatar] = useState(state.userProfile.avatar);
  const [isProfileModified, setIsProfileModified] = useState(false);

  useFocusEffect(
    useCallback(() => {
      Analytics.trackEvent('Profile Screen is opened');
    }, []),
  );

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => setModalVisible(false);

  const handleLogout = () => {
    signOut(dispatch);
    navigation.navigate('SignIn');
  };

  const handleUpdate = async () => {
    await setUserProfile(dispatch, state.userToken, {
      fullName,
      phone,
      city,
      street,
      building,
      avatar,
    });
    setIsProfileModified(false);
  };

  const handleImagePress = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    await launchImageLibrary(options, (res: ImagePickerResponse) => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode) {
        console.log('ImagePicker Error: ', res.errorMessage);
      } else {
        setAvatar(res?.assets?.[0]?.uri);
      }
    });
  };

  useEffect(() => {
    if (
      fullName !== state.userProfile.fullName ||
      phone !== state.userProfile.phone ||
      city !== state.userProfile.city ||
      street !== state.userProfile.street ||
      building !== state.userProfile.building ||
      avatar !== state.userProfile.avatar
    ) {
      setIsProfileModified(true);
    } else {
      setIsProfileModified(false);
    }
  }, [fullName, phone, city, street, building, avatar, state.userProfile.avatar, state.userProfile.building,
    state.userProfile.city, state.userProfile.fullName, state.userProfile.phone, state.userProfile.street]);

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Pressable onPress={() => navigation.goBack()}>
          <IconArrowLeft fill={'#FFFFFF'} />
        </Pressable>
        <Text style={styles.headerTitle}>{route.name}</Text>
        <View>
          <IconBasket fill={'#FFFFFF'} />
        </View>
      </Header>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <InputWithLabel
          labelText={'Full Name'}
          extraStyle={styles.input}
          value={fullName}
          handleChange={setFullName}
        />
        <Pressable onPress={handleImagePress}>
          <Image
            style={styles.img}
            source={avatar ? {uri: avatar} : AVATAR_PLACEHOLDER}
          />
        </Pressable>
        <InputWithLabel
          labelText={'Mobile number'}
          extraStyle={styles.input}
          value={phone}
          handleChange={setPhone}
        />
        <InputWithLabel
          labelText={'City'}
          extraStyle={styles.input}
          value={city}
          handleChange={setCity}
        />
        <InputWithLabel
          labelText={'Locality, area or street'}
          extraStyle={styles.input}
          value={street}
          handleChange={setStreet}
        />
        <InputWithLabel
          labelText={'Flat no., Building name'}
          extraStyle={styles.input}
          value={building}
          handleChange={setBuilding}
        />
        <PrimaryButton
          content={'UPDATE'}
          handlePress={handleUpdate}
          extraStyle={isProfileModified ? {} : styles.hidden}
        />
        <PrimaryButton content={'LOGOUT'} handlePress={showModal} />
        <WarningModal
          isVisible={modalVisible}
          dismiss={hideModal}
          submit={handleLogout}
          title={'Are you sure you want to logout?'}
          submitButtonText={'LOGOUT'}
          iconName={'exclamation-circle'}
          iconColor={'#FEB96B'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 24,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    marginVertical: 40,
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
  },
  input: {
    marginVertical: 15,
  },
  hidden: {
    display: 'none',
  },
});
