import React from 'react';
import {GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import InterTextComponent from '../InterText/InterText.component';
import {styles} from './HeaderDetails.styled';

interface IProps {
  onBack: ((event: GestureResponderEvent) => void) | undefined;
}

const HeaderDetailsComponent = ({onBack}: IProps) => {
  return (
    <TouchableOpacity onPress={onBack}>
      <View style={styles.backButtonContainer}>
        <View style={styles.backButtonWrapper}>
          <Ionicons name="arrow-back" size={12} color="#59695C" />
          <InterTextComponent style={styles.backButtonText}>
            Go back to Characters List
          </InterTextComponent>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderDetailsComponent;
