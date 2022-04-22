import React, { Component } from 'react'
import RegistrationForm from './RegistrationForm'
import RegistrationList from './RegistrationList'

export default class UserRegistration extends Component {
    render() {
        return (
            
                <div className='container bg-light mt-5'>
                    <RegistrationForm />
                    <RegistrationList />
                </div>
            
        )
    }
}
