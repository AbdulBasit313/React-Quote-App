import React from 'react'

// Social Share component
export const TwitterShare = ({ quote, author }) => {
   return (
      <React.Fragment>
         <a href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`} target="_blank" title="Post this quote on twitter!" id='tweet-quote'>
            <i className="fab fa-twitter twitter-icon" />
         </a>
      </React.Fragment>
   )
}

export const WhatsAppShare = ({ quote, author }) => {
   return (
      <React.Fragment>
         <a href={`https://api.whatsapp.com/send?phone=whatsappphonenumber&text= ${quote} ${author}`} target="_blank" title="Post this quote on WhatsApp!" id='whatsapp-quote'>
            <i className="fab fa-whatsapp whatsapp-icon" />
         </a>
      </React.Fragment>
   )
}