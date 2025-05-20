import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 24,
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 36,
    margin: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  filtersContainer: {
    padding: 12,
    paddingTop: 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#162C1B',
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
    outline: 'none',
  },
});
