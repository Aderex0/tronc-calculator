import React from 'react'

export const ContactUsMessage = ({ messageId }) => {
  return (
    <>
      {messageId === 1 ? (
        <div>
          <p>
            Thank you for your submission. We will deal with your query as soon
            as possible.
          </p>
          <button>Return to homepage</button>
        </div>
      ) : (
        <div>
          <p>
            Ooops, something has gone wrong! Please retry again. Alternatively
            you can email us at tronc-calculator@gmail.com
          </p>
          <button>Homepage</button>
          <button>Back to contact us</button>
        </div>
      )}
    </>
  )
}
