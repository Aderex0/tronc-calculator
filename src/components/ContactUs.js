import React, { useState, useEffect } from 'react'

export const ContactUs = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    name.length < 2
      ? document.querySelector('.contact-us-name').classList.add('invalid')
      : document.querySelector('.contact-us-name').classList.remove('invalid')
  }, [name])

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('choose')

  useEffect(() => {
    subject === 'choose'
      ? document.querySelector('.contact-us-subject').classList.add('invalid')
      : document
          .querySelector('.contact-us-subject')
          .classList.remove('invalid')

    subject === 'error'
      ? document.querySelector('.contact-us-email').classList.add('invalid')
      : document.querySelector('.contact-us-email').classList.remove('invalid')
  }, [subject])

  const [details, setDetails] = useState('')
  useEffect(() => {
    details.length < 1
      ? document.querySelector('.contact-us-details').classList.add('invalid')
      : document
          .querySelector('.contact-us-details')
          .classList.remove('invalid')
  }, [details])

  return (
    <div className='contact-us-form'>
      <h2>Contact us</h2>
      <form>
        <label id='Nm'>Name</label>
        <span>{name.length < 2 && 'Minimum 2 characters'}</span>
        <input
          type='text'
          id='Nm'
          className='contact-us-name'
          data-testid='contact-us-name'
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
        <label id='Em'>Email</label>
        <span>
          {subject === 'error' ? 'We require an email for errors' : 'optional'}
        </span>
        <input
          type='email'
          id='Em'
          value={email}
          className='contact-us-email'
          data-testid='contact-us-email'
          onChange={e => {
            setEmail(e.target.value)
          }}
        ></input>
        <label id='Sb'>Subject</label>
        <span>{subject === 'choose' && 'Must choose a subject'}</span>
        <select
          id='Sb'
          className='contact-us-subject'
          data-testid='contact-us-subject'
          value={subject}
          onChange={e => setSubject(e.target.value)}
        >
          <option value='choose'>Choose one</option>
          <option value='comment'>Leaving a comment</option>
          <option value='suggestion'>I have a suggestion</option>
          <option value='error'>Reporting an error</option>
          <option value='other'>Contacting for other reasons</option>
        </select>
        <label id='Dt'>Details</label>
        <span>{details.length}/800</span>
        <textarea
          className='contact-us-details'
          id='Dt'
          data-testid='contact-us-details'
          value={details}
          onChange={e => setDetails(e.target.value)}
          maxLength='800'
        ></textarea>
        <input data-testid='contact-us-submit' type='submit'></input>
      </form>
    </div>
  )
}
