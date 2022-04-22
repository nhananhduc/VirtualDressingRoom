import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUserAction, removeUserAction } from '../redux/actions/RegistrationAction'

class RegistrationList extends Component {

  renderUserList = () => {
    return this.props.userList.map((user, index) => {
      return <tr key={index}>
        <th className='text-center border'>{index + 1}</th>
        <th className='border'>{user.account}</th>
        <th className='border'>{user.fullName}</th>
        <th className='border'>{user.phone}</th>
        <th className='border'>{user.email}</th>
        <th className='border'>{user.userType}</th>
        <th className='text-center'>
          <button onClick={() => {
            user.disabled = false;
            this.props.dispatch(editUserAction(user))

          }} className='btn btn-primary mr-2'>Edit</button>
          <button onClick={() => {
            this.props.dispatch(removeUserAction(user.id))
          }} className='btn btn-danger'>Remove</button>
        </th>
      </tr>
    })
  }

  render() {
    return (
      <div className='row border'>
        <div className='col-12 p-0'>
          <h3 className='text-white bg-dark px-3 py-2'>User List</h3>
        </div>
        <table className="table">
          <thead>
            <tr className='text-success' style={{ fontSize: 20 }}>
              <th className='text-center border'>NO</th>
              <th className='text-center border'>ACCOUNT</th>
              <th className='text-center border'>NAME</th>
              <th className='text-center border'>PHONE</th>
              <th className='text-center border'>EMAIL</th>
              <th className='text-center border'>USER TYPE</th>
              <th className='text-center border'></th>
            </tr>
          </thead>
          <tbody>
            {this.renderUserList()}
          </tbody>
        </table>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userList: state.UserRegistrationReducer.userList
  }
}

export default connect(mapStateToProps)(RegistrationList)
