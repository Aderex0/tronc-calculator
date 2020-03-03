import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { FaRegCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const ContactUsMessage = ({ messageId }) => {
  return (
    <>
      <div className='cf-message-success'>
        {messageId === 1 ? (
          <div>
            <span>
              <FaRegCheckCircle size='50%' color='turquoise' />
            </span>
            <p>
              Thank you for your submission. We will deal with your query as
              soon as possible.
            </p>
            <Link to='/'>
              <button>Homepage</button>
            </Link>
          </div>
        ) : (
          <div>
            <span>
              <FaRegTimesCircle size='50%' color='red' />
            </span>
            <p>
              Ooops, something has gone wrong! Please retry again. Alternatively
              you can email us at tronc-calculator@gmail.com
            </p>
            <div className='cf-btn-container'>
              <Link to='/'>
                <button>Homepage</button>
              </Link>
              <Link to='/contact-us'>
                <button>Back to contact us</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
