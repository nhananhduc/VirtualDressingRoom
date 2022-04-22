import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUserAction, updateUserAction } from '../redux/actions/RegistrationAction';

class RegistrationForm extends Component {

    state = {
        values: {
            account: '',
            fullName: '',
            password: '',
            phone: '',
            email: '',
            userType: 'Customer',
            disabled: true
        },
        errors: {
            account: '',
            fullName: '',
            password: '',
            phone: '',
            email: ''
        }
    }

    handleChangeValue = (e) => {
        let { name, value, type } = e.target;
        let newValue = { ...this.state.values, [name]: value };
        let newError = { ...this.state.errors };
        if (value.trim() === '') {
            newError[name] = '* ' + name + ' is required!';
        } else {
            newError[name] = '';
        }

        if (name === 'phone') {
            const regexPhone = /^[0-9]*$/;
            if (!regexPhone.test(value)) {
                newError[name] = '* ' + name + ' must be number only!'
            } else if (value.trim() === '') {
                newError[name] = '* ' + name + ' is required!'
            } else {
                newError[name] = ''
            }
        }


        if (type === 'email') {
            const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            if (!regexEmail.test(value)) {
                newError[name] = '* ' + name + ' is invalid!'
            }
            else {
                newError[name] = ''
            }
        }

        this.setState({
            values: newValue,
            errors: newError
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className='row border mb-3'>
                <div className='col-12 p-0'>
                    <h3 className='text-white bg-dark p-3'>Registration Form</h3>
                </div>
                <div className="col-6">
                    <div>
                        <label className="form-label">Account</label>
                        <input value={this.state.values.account} onChange={this.handleChangeValue} required type="text" className="form-control mb-2" name='account' placeholder="Enter your account..." />
                        <span className='text-danger'>{this.state.errors.account}</span>
                    </div>

                    <div>
                        <label className="form-label">Password</label>
                        <input value={this.state.values.password} onChange={this.handleChangeValue} required type="password" className="form-control mb-2" name='password' placeholder="Enter your password..." />
                        <span className='text-danger'>{this.state.errors.password}</span>

                    </div>

                    <div>
                        <label className="form-label">Email</label>
                        <input value={this.state.values.email} onChange={this.handleChangeValue} required type="email" className="form-control mb-2" name='email' placeholder="Enter your email..." />
                        <span className='text-danger'>{this.state.errors.email}</span>
                    </div>
                </div>
                <div className='col-6'>
                    <div>
                        <label className="form-label">Full Name</label>
                        <input value={this.state.values.fullName} onChange={this.handleChangeValue} required type="text" className="form-control mb-2" name='fullName' placeholder="Enter your full name..." />
                        <span className='text-danger'>{this.state.errors.fullName}</span>
                    </div>

                    <div>
                        <label className="form-label">Phone</label>
                        <input value={this.state.values.phone} onChange={this.handleChangeValue} required type="phone" className="form-control mb-2" name='phone' placeholder="Enter your phone number..." />
                        <span className='text-danger'>{this.state.errors.phone}</span>
                    </div>

                    <div>
                        <label className="form-label">User Type</label>
                        <div>
                            <select className="form-control w-100" name='userType' value={this.state.values.userType} onChange={this.handleChangeValue}>
                                <option value="Customer">Customer</option>
                                <option value="Administrator">Adminstrator</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className='col-12 my-2'>
                    <button className='btn btn-success mr-2' onClick={() => {
                        let { values } = this.state;
                        let { errors } = this.state;

                        let newUser = {
                            id: Date.now(),
                            account: values.account,
                            fullName: values.fullName,
                            password: values.password,
                            phone: values.phone,
                            email: values.email,
                            userType: values.userType
                        }

                        if (errors.account === '' && errors.fullName === '' && errors.password === '' && errors.email === '' && errors.phone === ''
                            && values.account !== '' && values.fullName !== '' && values.password !== '' && values.email !== '' && values.phone !== '') {
                            this.props.dispatch(registerUserAction(newUser))
                        } else {
                            alert("Your information is invalid!")
                        }
                    }}>Register</button>
                    {this.state.values.disabled ? <button disabled onClick={() => {
                        this.props.dispatch(updateUserAction(this.state.values))
                    }} className='btn btn-primary'>Update</button> :
                        <button onClick={() => {
                            let updateValue = { ...this.state.values };
                            let resetValue = { ...this.state.values, account: '', email: '', password: '', phone: '', fullName: '', userType: 'Customer', disabled: true };
                            this.setState({
                                values: resetValue
                            }, () => {
                                this.props.dispatch(updateUserAction(updateValue))
                            })
                        }} className='btn btn-primary'>Update</button>}
                </div>
            </form>
        )
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userEdit.id !== this.props.userEdit.id) {
            this.setState({
                values: this.props.userEdit
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        userList: state.UserRegistrationReducer.userList,
        userEdit: state.UserRegistrationReducer.userEdit
    }
}

export default connect(mapStateToProps)(RegistrationForm)

