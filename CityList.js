import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { Constants } from 'expo';
import Arrow from './arrow.png';

export default class CityList extends React.Component {
  static navigationOptions = {
    title: 'Cities',
    headerStyle: {
      backgroundColor: '#222f3e',
      height:50,
    },
    headerTitleStyle:{
      fontSize: 20,
      textAlign: 'center',
      color: "#f1f2f6",
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    fetch('http://demo6468405.mockable.io/weather-crawlers/cities')
      .then(response => response.json())
      .then(cities => {
        console.log('cities =', cities.length);
        this.setState({
          cities
        });
      });
  }

  onPressCity(item) {
    this.props.navigation.navigate(
      'Detail',
      {
        city: item
      }
    );
  }

  renderItem(city) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
      <Image style={styles.imagestyle} source={require('./arrow.png')} />
        <Text style={styles.text}>{city}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (

      <FlatList style={styles.container}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={item => item}
                data={this.state.cities}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222f3e', // #fff
    marginTop: Constants.statusBarHeight,
  },

  item: {
    margin: 7,
    marginLeft: 14,
    marginRight: 14,
    flex: 1,
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#576574',

    //
    // borderWidth: 1,
    // borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: "#f1f2f6",
  },
});
