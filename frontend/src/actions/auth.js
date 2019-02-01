import {
  LOGIN_RESET,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  EDIT_PROFILE_RESET,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  LOGOUT
} from "./types"

import {loginApi, logoutApi, editProfileApi} from "../api"
import store from '../store'
import {hideModal} from './modal'
import {apiErrorHandler} from "../utils/errorHandler"

export const login = (username, password) => dispatch => {
  dispatch(loginRequest())

  loginApi(username, password)
    .then(res => {
      dispatch(loginSuccess(res.data))
      dispatch(hideModal())
    })
    .catch(error => {
      const errorMessage = apiErrorHandler(error)
      dispatch(loginFailure(errorMessage))
    })
}

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = data => {
  return {
    type: LOGIN_SUCCESS,
    token: data.token,
    username: data.username,
    name: data.name,
    avatar: data.avatar,
    isStaff: data.is_Staff
  }
}

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export const logout = () => dispatch => {
  logoutApi()
  dispatch({
    type: LOGOUT
  })
}

export const loginReset = () => {
  return {
    type: LOGIN_RESET
  }
}

export const editProfile = newProfile => dispatch => {
  dispatch(editProfileRequest())

  const username = store.getState().auth.username
  if (!username) {
    dispatch(editProfileFailure('Not authenticated'))
  } else {
    editProfileApi(username, newProfile)
      .then(res => {
        dispatch(editProfileSuccess(newProfile))
      })
      .catch(error => {
        const errorMessage = apiErrorHandler(error)
        dispatch(editProfileFailure(errorMessage))
      })
  }
}

export const editProfileRequest = () => {
  return {
    type: EDIT_PROFILE_REQUEST
  }
}

export const editProfileSuccess = newProfile => {
  return {
    type: EDIT_PROFILE_SUCCESS,
    avatar: newProfile.avatar,
    name: newProfile.name
  }
}

export const editProfileFailure = error => {
  return {
    type: EDIT_PROFILE_FAILURE,
    error
  }
}

export const editProfileReset = () => {
  return {
    type: EDIT_PROFILE_RESET
  }
}
