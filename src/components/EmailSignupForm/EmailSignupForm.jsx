import React from 'react'
import './emailSignupForm.scss'
import Mailchimp from 'react-mailchimp-form'

const EmailSignupForm = () => {

    return (
        <Mailchimp
        action='https://the100million.us4.list-manage.com/subscribe/post?u=6cccef90c00e0c65ec8664216&amp;id=d5aea522f9'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email Address',
            type: 'email',
            required: true
          }
        ]}
        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Notify Me!"
          }
        }
        />
    )
}

export default EmailSignupForm