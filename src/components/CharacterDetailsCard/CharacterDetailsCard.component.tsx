import React from 'react';
import {GestureResponderEvent, View, TouchableOpacity} from 'react-native';
import {Image} from 'expo-image';
import {styles} from './CharacterDetailsCard.styled';
import {ICharacter} from '../../services/character/character.types';
import InterTextComponent from '../InterText/InterText.component';
import DmmonoTextComponent from '../DmmonoText/DmmonoText.component';
import AntDesign from '@expo/vector-icons/AntDesign';

interface IProps {
  onLike?: (event: GestureResponderEvent) => void;
  character?: ICharacter;
}

const CharacterDetailsCardComponent = ({character, onLike}: IProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.media}>
        <Image source={{uri: character?.image}} style={styles.image} />
      </View>

      <View>
        <DmmonoTextComponent style={styles.label}>NAME</DmmonoTextComponent>
        <InterTextComponent style={styles.title}>
          {character?.name}
        </InterTextComponent>
      </View>

      <View style={styles.info}>
        <View style={styles.column}>
          <View style={styles.row}>
            <DmmonoTextComponent style={styles.label}>
              STATUS
            </DmmonoTextComponent>
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
        <View style={styles.column}>
          <View style={styles.row}>
            <DmmonoTextComponent style={styles.label}>
              ORIGIN
            </DmmonoTextComponent>
            <InterTextComponent style={styles.value}>
              {character?.origin?.name}
            </InterTextComponent>
          </View>
          <View style={styles.row}>
            <DmmonoTextComponent style={styles.label}>
              GENDER
            </DmmonoTextComponent>
            <InterTextComponent style={styles.value}>
              {character?.gender}
            </InterTextComponent>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.likeButton} onPress={onLike}>
        <AntDesign name="staro" size={16} color="#fff" />
        <InterTextComponent style={styles.likeText}>
          ADD TO LIKED
        </InterTextComponent>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterDetailsCardComponent;
