import React from 'react';
import {
  GestureResponderEvent,
  View,
  Text,
  TouchableOpacity,
  Touchable,
  TouchableHighlight,
} from 'react-native';
import {Image} from 'expo-image';
import {styles} from './CharacterCard.styled';
import {ICharacter} from '../../services/character/character.types';
import InterTextComponent from '../InterText/InterText.component';
import DmmonoTextComponent from '../DmmonoText/DmmonoText.component';
import AntDesign from '@expo/vector-icons/AntDesign';

interface IProps {
  onLike?: (event: GestureResponderEvent) => void;
  character?: ICharacter;
  onPressCard?: (event: GestureResponderEvent) => void;
}

const CharacterCardComponent = ({character, onLike, onPressCard}: IProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPressCard}>
      <View style={styles.info}>
        <View style={styles.row}>
          <DmmonoTextComponent style={styles.label}>NAME</DmmonoTextComponent>
          <InterTextComponent style={styles.value}>
            {character?.name}
          </InterTextComponent>
        </View>
        <View style={styles.row}>
          <DmmonoTextComponent style={styles.label}>STATUS</DmmonoTextComponent>
          <InterTextComponent style={styles.value}>
            {character?.status}
          </InterTextComponent>
        </View>
        <View style={styles.row}>
          <DmmonoTextComponent style={styles.label}>
            SPECIES
          </DmmonoTextComponent>
          <InterTextComponent style={styles.value}>
            {character?.species}
          </InterTextComponent>
        </View>
      </View>

      <View style={styles.media}>
        <Image source={{uri: character?.image}} style={styles.image} />
        <TouchableOpacity style={styles.likeButton} onPress={onLike}>
          <AntDesign name="staro" size={16} color="#224229" />
          <InterTextComponent style={styles.likeText}>LIKE</InterTextComponent>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCardComponent;
