/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, ActivityIndicator, FlatList, Text, Image} from 'react-native';
import {fetchData} from './src/network/Services';
import {style} from './src/style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoList: [],
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
        this.setState({repoList: result, loading: false});
      })
      .catch(err => {
        console.log(' ERROR: ', err.message);
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };
  render() {
    return (
      <View style={style.baseContainer}>
        <Text style={style.logoText}>Trending Repo</Text>
        <View style={style.flatListView}>
          <FlatList
            data={this.state.repoList}
            renderItem={({item}) => (
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 0,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
                source={{
                  uri: item.avatar,
                }}
              />
            )}
          />
        </View>
        {this.state.loading === true ? (
          <View>
            <ActivityIndicator size="large" color="#0082C8" />
          </View>
        ) : null}
      </View>
    );
  }
}
export default App;
