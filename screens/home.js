import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PhotoList, Toolbar } from '../components';
import { ImagePicker } from 'expo';

const toolbarItems = [{
  icon: 'md-add-circle',
  title: 'Add new photo',
  path: 'Create',
}, {
  icon: 'md-contact',
  title: 'Profile',
  path: 'Profile',
}];

export class HomeScreen extends React.Component {
  state = {
    items: [],
  }

  constructor(props) {
    super(props);
    this.addNewImage = this.addNewImage.bind(this);
  }

  async addNewImage () {
    let result = await ImagePicker.launchImageLibraryAsync();
    
    if (result.cancelled) {
      return;
    }

    this.setState({
      items: [
        ...this.state.items, 
        {
          title: result.uri, 
          uri: result.uri
        }
      ]
    });
  }

  handlePress = (item) => {
    const { navigation } = this.props;
    switch (item.path) {
      case 'Profile':
        navigation.navigate(item.path);
        break;
      case 'Create':
        this.addNewImage();
        break;
    }
  }

  render() {
    const { navigation } = this.props;
    console.log(this.state.items)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainView}>
          <PhotoList
            items={this.state.items}
          />
        </ScrollView>
        <View style={styles.toolbar}>
          <Toolbar items={toolbarItems} onPress={this.handlePress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  mainView: {
  },
  toolbar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  }
});
