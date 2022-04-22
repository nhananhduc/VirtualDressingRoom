import { EDIT_USER, REGISTER_USER, REMOVE_USER, UPDATE_USER } from "../types/RegistrationFormType"

const initialState = {
    userList: [{
        id: 1,
        account: 'Duc',
        fullName: 'Nhan Anh Duc',
        password: 'Duc123',
        phone: '0332648366',
        email: 'nhananhduc@gmail.com',
        userType: 'Customer',
        disabled: true
    },
    {
        id: 2,
        account: 'Trang',
        fullName: 'Nguyen Thuy Trang',
        password: 'Trang123',
        phone: '0917032492',
        email: 'nguyenthuytrang@gmail.com',
        userType: 'Administrator',
        disabled: true
    }],
    userEdit: { id: '', account: '', fullName: '', phone: '', email: '', userType: '', disabled: false }
}
const UserRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER: {
            let userListUpdate = [...state.userList];
            let index = userListUpdate.findIndex(user => user.email === action.newUser.email);
            if (index !== -1) {
                alert('Email already existed!')
            } else {
                userListUpdate.push(action.newUser);
            }
            return { ...state, userList: userListUpdate }
        }
        case REMOVE_USER: {
            state.userList = state.userList.filter(user => user.id !== action.userId);
            return { ...state, userList: state.userList }
        }
        case EDIT_USER: {
            return { ...state, userEdit: action.user }
        }
        case UPDATE_USER: {
            let { account, fullName, phone, email, userType } = action.user
            state.userEdit = { ...state.userEdit, account: account, fullName: fullName, phone: phone, email: email, userType: userType };
            let userListUpdate = [...state.userList];
            let index = userListUpdate.findIndex(user => user.id === state.userEdit.id);
            if (index !== -1) {
                userListUpdate[index] = state.userEdit
            }
            state.userList = userListUpdate;
            state.userEdit = { id: '-1', account: '', fullName: '', phone: '', email: '', userType: '', disabled: false }
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default UserRegistrationReducer
