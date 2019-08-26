/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import {fetchData} from './src/network/Services';

import {Colors} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraySearchResult: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.featchSearchResult();
  }

  featchSearchResult = async () => {
    fetchData('https://github-trending-api.now.sh/')
      .then(respone => {
        const result = respone.data;
        console.log(' RESPONSE RECEIVED: ', result);
        this.setState({arraySearchResult: result.items, loading: false});
      })
      .catch(err => {
        console.log(' ERROR: ', err.message);
      });
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text>Hi</Text>
        </SafeAreaView>
      </Fragment>
    );
  }

  styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
}

export default App;
