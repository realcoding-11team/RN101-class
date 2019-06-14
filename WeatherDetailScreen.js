import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

export default class WeatherDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Weather Info: ${navigation.getParam('city', 'Unknown')}`,
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
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    // const city = navigation.getParam('city', null);
    const city = 'Daejeon';

    fetch(`http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/${city}`)
      .then(response => response.json())
      .then(info => {
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>데이터를 불러오는 중입니다.</Text>
        </View>
      )
    }

    let celsius = this.state.main.temp - 273.15;
    let humidity=this.state.main.humidity;
    let celsiusMin=this.state.main.temp_min - 273.15;
    let celsiusMax=this.state.main.temp_max - 273.15;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>온도: {celsius.toFixed(1)}</Text>
        <Text style={styles.text}>습도: {celsius.toFixed(1)}</Text>
        <Text style={styles.text}>최저기온: {celsius.toFixed(1)}</Text>
        <Text style={styles.text}>최고기온: {celsius.toFixed(1)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222f3e',
    marginTop: Constants.statusBarHeight,
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',

    color: "#f1f2f6",
  },
});
