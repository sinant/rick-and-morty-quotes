import React from 'react';
import { StyleSheet, Button, Text, View, TouchableHighlight } from 'react-native';
import Quote from './components/Quote';
import Swiper from 'react-native-deck-swiper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: [] };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    fetch('http://loremricksum.com/api/?paragraphs=20&words=1', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ quote: responseJson.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          cards={this.state.quote}
          renderCard={card => {
            return (
              <View style={styles.card}>
                <Quote>{card}</Quote>
              </View>
            );
          }}
          onSwiped={cardIndex => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => this.fetchQuote()}
          cardIndex={0}
          backgroundColor={'#202329'}
          stackSize={3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ff9800',
    justifyContent: 'center',
    backgroundColor: '#202329',
  },
});

export default App;
