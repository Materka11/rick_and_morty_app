import React from 'react';
import {GestureResponderEvent, View, Pressable} from 'react-native';
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
  isFavorite?: boolean;
}

const CharacterCardComponent = ({
  character,
  onLike,
  onPressCard,
  isFavorite,
}: IProps) => {
  return (
    <Pressable style={styles.card} onPress={onPressCard}>
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
        <Pressable
          style={[
            styles.likeButton,
            isFavorite ? {backgroundColor: '#DAE4DC'} : '',
          ]}
          onPress={onLike}>
          <AntDesign
            name={isFavorite ? 'star' : 'staro'}
            size={16}
            color={isFavorite ? '#F89F34' : '#224229'}
          />
          <InterTextComponent style={styles.likeText}>LIKE</InterTextComponent>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default CharacterCardComponent;
