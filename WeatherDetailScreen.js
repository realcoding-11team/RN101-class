import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { Constants } from 'expo';
import loading from './loading.gif';

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
    const city = navigation.getParam('city', null);
    //const city = 'Daejeon';
    //fetch(`http://demo6468405.mockable.io/weather-crawlers/cities`)
    fetch(`http://192.168.100.175:8080/weather-crawler/current-weathers/by-city-name/${city}`)
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
        <View style={styles.loading}>
        <Image style={styles.imagestyle} source={require('./loading.gif')}/>
        </View>
      )
    }

    let celsius = this.state.main.temp - 273.15;
    let humidity=this.state.main.humidity;
    let celsiusMin=this.state.main.temp_min - 273.15;
    let celsiusMax=this.state.main.temp_max - 273.15;
    let weathers=this.state.weather[0].main;
    var imagefile;
    weathers=weathers.trim();
    if (weathers == 'Haze')
        return (
              <View style={styles.container}>
                <Image style={styles.wimagestyle} source={require('./haze.png')} />
                <Text style={styles.ctext}>{celsius.toFixed(0)}<Image style={styles.cimage} source={require('./c.png')} /></Text>
                <Text style={styles.text}>현재습도: {humidity.toFixed(0)} % </Text>
                <Text style={styles.text}>최저기온: {celsiusMin.toFixed(0)} °C</Text>
                <Text style={styles.text}>최고기온: {celsiusMax.toFixed(0)} °C</Text>
              </View>
            );
    else if(weathers == 'Snow')
        return (
              <View style={styles.container}>
                <Image style={styles.wimagestyle} source={require('./snow.png')} />
                <Text style={styles.ctext}>{celsius.toFixed(0)}<Image style={styles.cimage} source={require('./c.png')} /></Text>
                <Text style={styles.text}>현재습도: {humidity.toFixed(0)} % </Text>
                <Text style={styles.text}>최저기온: {celsiusMin.toFixed(0)} °C</Text>
                <Text style={styles.text}>최고기온: {celsiusMax.toFixed(0)} °C</Text>
              </View>
            );
    else if(weathers == 'Rain')
            return (
                  <View style={styles.container}>
                    <Image style={styles.wimagestyle} source={require('./rain.png')} />
                    <Text style={styles.ctext}>{celsius.toFixed(0)}<Image style={styles.cimage} source={require('./c.png')} /></Text>
                    <Text style={styles.text}>현재습도: {humidity.toFixed(0)} % </Text>
                    <Text style={styles.text}>최저기온: {celsiusMin.toFixed(0)} °C</Text>
                    <Text style={styles.text}>최고기온: {celsiusMax.toFixed(0)} °C</Text>
                  </View>
                );
    else if(weathers == 'Clear')
         return (
               <View style={styles.container}>
                 <Image style={styles.wimagestyle} source={require('./clear.png')} />
                 <Text style={styles.ctext}>{celsius.toFixed(0)}<Image style={styles.cimage} source={require('./c.png')} /></Text>
                 <Text style={styles.text}>현재습도: {humidity.toFixed(0)} % </Text>
                 <Text style={styles.text}>최저기온: {celsiusMin.toFixed(0)} °C</Text>
                 <Text style={styles.text}>최고기온: {celsiusMax.toFixed(0)} °C</Text>
               </View>
             );
    else
         return (
               <View style={styles.container}>
                 <Image style={styles.wimagestyle} source={require('./cloud.png')} />
                 <Text style={styles.ctext}>{celsius.toFixed(0)}<Image style={styles.cimage} source={require('./c.png')} /></Text>
                 <Text style={styles.text}>현재습도: {humidity.toFixed(0)} % </Text>
                 <Text style={styles.text}>최저기온: {celsiusMin.toFixed(0)} °C</Text>
                 <Text style={styles.text}>최고기온: {celsiusMax.toFixed(0)} °C</Text>
               </View>
             );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222f3e',
    marginTop: 0,
    fontSize: 20,
    // flexDirection:'row',
    alignItems:'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: "#f1f2f6",
    height:'auto',
  },
  loading: {
    backgroundColor: '#222f3e',
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
  },
  imagestyle: {
    position:'absolute',
    left:100,
    height:200,
    width:200,
  },
  wimagestyle: {
    height:150,
    width:150,
  },
  ctext: {
    fontSize: 100,
    textAlign: 'center',
    color: "#f1f2f6",
    height:'auto',
  },
  cimage: {
    height:40,
    width:40,
  },
});