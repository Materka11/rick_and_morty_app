import React from 'react';
import {TextProps, Text} from 'react-native';
import {styles} from './InterText.styled';

const InterTextComponent = ({style, children, ...rest}: TextProps) => {
  return (
    <Text style={[styles.default, style]} {...rest}>
      {children}
    </Text>
  );
};
export default InterTextComponent;
