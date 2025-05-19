import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    borderColor: '#224229',
    borderWidth: 1,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    width: '100%',
    height: '100%',
    maxHeight: 684,
    justifyContent: 'space-between',
    maxWidth: 358,
    gap: 16,
  },
  title: {
    fontSize: 36,
    color: '#224229',
  },
  info: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    gap: 16,
  },
  column: {
    gap: 16,
  },
  row: {
    padding: 8,
    backgroundColor: '#F4F6F5',
    width: '100%',
    minWidth: 127,
    borderRadius: 10,
  },
  label: {
    fontSize: 12,
    color: '#59695C',
    letterSpacing: 1,
  },
  value: {
    fontSize: 16,
    color: '#162C1B',
  },
  media: {
    width: '100%',
    alignItems: 'center',
    height: 310,
    flexShrink: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
    borderColor: '#224229',
    borderWidth: 1,
  },
  likeButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
    backgroundColor: '#224229',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    height: 34,
  },
  likeText: {
    fontSize: 14,
    color: '#fff',
  },
});
