import { EDIT_USER, REGISTER_USER, REMOVE_USER, UPDATE_USER } from "../types/RegistrationFormType";

export const registerUserAction = (newUser) => ({
    type: REGISTER_USER,
    newUser
})

export const removeUserAction = (userId) => ({
    type: REMOVE_USER,
    userId
})

export const editUserAction = (user) => ({
    type: EDIT_USER,
    user
})

export const updateUserAction = (user) => ({
    type: UPDATE_USER,
    user
})


