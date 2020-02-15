import React, { useState } from 'react'

export const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [details, setDetails] = useState('')

  return (
    <div className='contact-us-form'>
      <form>
        <h2>Contact us</h2>
        <label id='Nm'>Name</label>
        <input
          type='text'
          id='Nm'
          data-testid='contact-us-name'
          value={name}
          onChange={() => setName}
        ></input>
        <label id='Em'>Email</label>
        <input
          type='email'
          id='Em'
          data-testid='contact-us-email'
          value={email}
          onChange={() => setEmail}
        ></input>
        <label id='Sb'>Subject</label>
        <select
          id='Sb'
          data-testid='contact-us-subject'
          value={subject}
          onChange={() => setDetails}
        >
          <option value='choose'>Choose one</option>
          <option value='comment'>Leaving a comment</option>
          <option value='suggestion'>I have a suggestion</option>
          <option value='error'>Reporting an error</option>
          <option value='other'>Contacting for other reasons</option>
        </select>
        <label id='Dt'>Details</label>
        <input
          type='text'
          className='contact-us-details'
          id='Dt'
          data-testid='contact-us-details'
          value={details}
          onChange={() => setSubject}
        ></input>
        <input data-testid='contact-us-submit' type='submit'></input>
      </form>
    </div>
  )
}
