import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { Label, InputText, Avatar } from '../components';
import { updateAvatarUri, updateUserName } from '../ducks/user';

const mapStateToProps = state => ({
  userName: state.user.userName,
  avatarUri: state.user.avatarUri,
});

@connect(mapStateToProps)
@connectActionSheet
export class ProfileScreen extends React.Component {
  static propTypes = {
    showActionSheetWithOptions: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    avatarUri: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.addImageFromGallery = this.addImageFromGallery.bind(this);
    this.addImageFromCamera = this.addImageFromCamera.bind(this);
  }

  async addImageFromCamera() {
    const result = await ImagePicker.launchCameraAsync();

    this.updateAvatar(result);
  }

  async addImageFromGallery() {
    const result = await ImagePicker.launchImageLibraryAsync();

    this.updateAvatar(result);
  }

  updateAvatar = (result) => {
    const { dispatch } = this.props;

    if (result.cancelled) {
      return;
    }

    dispatch(updateAvatarUri(result.uri));
  }

  showModal = () => {
    const options = ['Capture from camera', 'Take from gallery', 'Cancel'];

    this.props.showActionSheetWithOptions(
      {
        options,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.addImageFromCamera();
            break;
          case 1:
            this.addImageFromGallery();
            break;
          default:
            break;
        }
      },
    );
  }

  changeUserName = (text) => {
    const { dispatch } = this.props;

    dispatch(updateUserName(text));
  }

  render() {
    const { avatarUri, userName } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar
            uri={avatarUri}
            onPress={this.showModal}
          />
        </View>
        <View style={styles.input}>
          <Label title="User name" />
          <InputText
            onBlur={this.changeUserName}
            defaultValue={userName}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  input: {},
});
