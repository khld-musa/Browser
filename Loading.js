import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator animating={true} size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Loading;
