import React, { Component } from 'react'
import axios from 'axios'
import QuoteBox from './QuoteBox';
import { TwitterShare, WhatsAppShare } from './SocialShare';
import Button from './Button';


class Quote extends Component {
   constructor(props) {
      super(props)
      this.state = {
         quote: '',
         author: '',
         previousQuote: '',
         previousAuthor: '',
      }
      this.getNewQuote = this.getNewQuote.bind(this)
      this.prevQuote = this.prevQuote.bind(this)
   }

   componentDidMount() {
      this.getQuote()
   }

   getQuote() {
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

      axios.get(url)
         .then(res => {
            let data = res.data.quotes
            let quoteNum = Math.floor(Math.random() * data.length)
            let randomQuote = data[quoteNum]

            this.setState(prevState => {
               return ({
                  quote: randomQuote['quote'],
                  author: randomQuote['author'],
                  previousQuote: prevState.quote,
                  previousAuthor: prevState.author,
               })
            })
            console.log('quote', this.state.quote)
            console.log('previousQuote', this.state.previousQuote)
         })
   }

   getNewQuote() {
      this.getQuote()
   }

   prevQuote() {
      this.setState({
         quote: this.state.previousQuote,
         author: this.state.previousAuthor,
      })
   }

   render() {
      const { quote, author } = this.state
      return (
         <div id='wrapper'>
            <h1 className='title'>React Quote App</h1>

            <div id='quote-box'>
               <QuoteBox quote={quote} author={author} />

               <div id='buttons'>
                  <div className='social-icon'>
                     <TwitterShare quote={quote} author={author} />
                     <WhatsAppShare quote={quote} author={author} />
                  </div>
                  <div className='quote-button'>
                     <Button id='prev-quote' title='Previous Quote' onClick={this.prevQuote} />
                     <Button id='new-quote' title='New Quote' onClick={this.getNewQuote} />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Quote