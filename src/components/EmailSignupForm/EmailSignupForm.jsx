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
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        />
    )
}

export default EmailSignupForm