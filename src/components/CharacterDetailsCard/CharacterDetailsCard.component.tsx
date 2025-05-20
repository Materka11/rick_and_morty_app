import React, {useState} from 'react';
import {GestureResponderEvent, View, Pressable} from 'react-native';
import {Image} from 'expo-image';
import {styles} from './CharacterDetailsCard.styled';
import {ICharacter} from '../../services/character/character.types';
import InterTextComponent from '../InterText/InterText.component';
import DmmonoTextComponent from '../DmmonoText/DmmonoText.component';
import AntDesign from '@expo/vector-icons/AntDesign';

interface IProps {
  onLike?: (event: GestureResponderEvent) => void;
  character?: ICharacter;
  isFavorite?: boolean;
}

const CharacterDetailsCardComponent = ({
  character,
  onLike,
  isFavorite,
}: IProps) => {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);

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
      <Pressable
        style={styles.likeButton}
        onPress={event => {
          if (onLike) {
            onLike(event);
          }
          setIsFavoriteState(prevState => !prevState);
        }}>
        <AntDesign
          name={isFavoriteState ? 'star' : 'staro'}
          size={16}
          color={isFavoriteState ? '#F89F34' : '#FFF'}
        />

        <InterTextComponent style={styles.likeText}>
          {isFavoriteState ? 'DELETE FROM LIKED' : 'ADD TO LIKED'}
        </InterTextComponent>
      </Pressable>
    </View>
  );
};

export default CharacterDetailsCardComponent;
