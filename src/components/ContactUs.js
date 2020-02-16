import React from 'react'
import { useContactUs } from '../hooks/useContactUs'

export const ContactUs = () => {
  const {
    name,
    email,
    details,
    subject,
    setName,
    setEmail,
    setDetails,
    setSubject
  } = useContactUs()

  const handleSubmit = e => {
    e.preventDefault()
    const templateId = 'template_5zYmlukf'

    sendFeedback(templateId, {
      message_html: details,
      from_name: name,
      reply_to: email,
      regards_to: subject
    })
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('tronc_calculator_gmail_com', templateId, variables)
      .then(res => {
        console.log('Email sent success')
      })
      .catch(err =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      )
  }
  return (
    <div className='contact-us-form'>
      <h2>Contact us</h2>
      <form>
        {/* onSubmit={e => handleSubmit(e)} */}
        <label id='Sb'>Subject</label>
        <span data-test-id='contact-us-sb-span'>
          {subject === 'choose' && 'Must choose a subject'}
        </span>
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
        <label id='Nm'>Name</label>
        <span data-test-id='contact-us-nm-span'>
          {name.length < 2 && 'Minimum 2 characters'}
        </span>
        <input
          type='text'
          id='Nm'
          className='contact-us-name'
          data-testid='contact-us-name'
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
        <label id='Em'>Email</label>
        <span data-testid='contact-us-em-span'>
          {subject === 'error'
            ? 'We require a valid email for errors'
            : /^.+@.+\..+$/.test(email)
            ? null
            : /^.+@.+\..+$/.test(email) || email.length !== 0
            ? 'Enter a valid email'
            : 'Optional'}
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
