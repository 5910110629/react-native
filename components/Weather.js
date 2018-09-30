import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Forecast from "./Forecast";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        main: '-',
        description: '-',
        temp:  0
      }
    };
  }
  fetchData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.props.zipCode
      },th&units=metric&AppID=fd68c0f2039c5a25f666a9ff374bc93e`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          forecast: {
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp
          }
        });
      })
      .catch(error => {
        console.warn(error);
      });
  };
  componentDidMount = () => this.fetchData();
  componentDidUpdate = (prevProps) => {
    if(prevProps.zipCode !== this.props.zipCode){
      this.fetchData()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
          <View style = {styles.box}>
          <Text style = {styles.boxText}>Zip code is {this.props.zipCode}</Text>
          <Forecast {...this.state.forecast} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    paddingTop: 0
    },
    backdrop: { width: '100%', height: '100%' },
    box:{ width: '100%',
          height: '50%', 
          backgroundColor: '#00001a',
          alignItems: 'center',
          paddingTop: '10%',
          flexDirection: "column",
          opacity: 0.4
    },
    boxText: {
      fontSize: 20 , color: '#e6ffff', textAlign: 'center'
    }
});
