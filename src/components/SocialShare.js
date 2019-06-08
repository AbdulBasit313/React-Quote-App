import React, { Fragment } from 'react'

// Social Share component
export const TwitterShare = ({ quote, author }) => {
   return (
      <Fragment>
         <a href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target="_blank" rel="noopener noreferrer" title="Post this quote on twitter!" id='tweet-quote'>
            <i className="fab fa-twitter twitter-icon" />
         </a>
      </Fragment>
   )
}

export const WhatsAppShare = ({ quote, author }) => {
   return (
      <Fragment>
         <a href={`https://api.whatsapp.com/send?text=${quote} ${author}`} target="_blank" rel="noopener noreferrer" title="Post this quote on WhatsApp!" id='whatsapp-quote'>
            <i className="fab fa-whatsapp whatsapp-icon" />
         </a>
      </Fragment>
   )
}