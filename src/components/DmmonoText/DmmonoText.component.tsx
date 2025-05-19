import React from 'react';
import {TextProps, Text} from 'react-native';
import {styles} from './DmmonoText.styled';

const DmmonoTextComponent = ({style, children, ...rest}: TextProps) => {
  return (
    <Text style={[styles.default, style]} {...rest}>
      {children}
    </Text>
  );
};
export default DmmonoTextComponent;
