import React, { Component } from 'react';

class FlashcardDeck extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.flashcards = props.flashcards;
    this.length = props.length;
    }
  
    getCount() {
      return this.flashcards.length;
    }
    
  }
  
  export default FlashcardDeck;