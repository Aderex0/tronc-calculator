import { useState, useEffect } from 'react'

export const useContactUs = () => {
  // name field
  const [name, setName] = useState('')
  useEffect(() => {
    name.length < 2
      ? document.querySelector('.contact-us-name').classList.add('invalid')
      : document.querySelector('.contact-us-name').classList.remove('invalid')
  }, [name])

  // email field
  const [email, setEmail] = useState('')
  useEffect(() => {
    ;/^.+@.+\..+$/.test(email) || (email.length === 0 && subject !== 'error')
      ? document.querySelector('.contact-us-email').classList.remove('invalid')
      : document.querySelector('.contact-us-email').classList.add('invalid')
  }, [email])

  //subject field
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

  //details field
  const [details, setDetails] = useState('')
  useEffect(() => {
    details.length < 1
      ? document.querySelector('.contact-us-details').classList.add('invalid')
      : document
          .querySelector('.contact-us-details')
          .classList.remove('invalid')
  }, [details])

  return {
    details,
    setDetails,
    subject,
    setSubject,
    email,
    setEmail,
    name,
    setName
  }
}
