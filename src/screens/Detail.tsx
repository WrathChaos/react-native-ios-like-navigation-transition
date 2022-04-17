import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface DetailScreenProps {
  style?: CustomStyleProp;
}

const DetailScreen: React.FC<DetailScreenProps> = ({style}) => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default DetailScreen;
