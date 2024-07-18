import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserSingUpForm from './UserSingUpForm'

import styles from '../../styles/User.module.css'
import { toggleForm, toggleFormType } from '../../features/user/user.slice'
import UserLoginForm from './UserLoginForm'

const UserForm = () => {
    const dispatch = useDispatch()

    const { showForm, formType } = useSelector(({ user }) => user)

    const closeForm = () => dispatch(toggleForm(false))
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type))

    return (
        showForm ? (
            <>
                <div className={styles.overlay} onClick={closeForm} />
                {formType === 'signup' ? (
                    <UserSingUpForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
                ) : (
                    <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
                )}
            </>
        ) : (
            <></>
        )
    )
}

export default UserForm
