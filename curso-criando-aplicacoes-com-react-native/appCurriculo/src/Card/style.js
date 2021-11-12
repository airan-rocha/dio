import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    backgroundColor: '#ffffff',
  },
  card_header: {},
  card_header_text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#939393',
    width: '100%',
    paddingVertical: 5,
  },
  card_content: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default styles;
