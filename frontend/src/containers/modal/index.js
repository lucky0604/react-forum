import React from 'react'
import {connect} from 'react-redux'
import LoginModal from './login'
import RegisterModal from './register'


const ModalContainer = props => {
  switch (props.modalType) {
    case 'LOGIN':
      return <LoginModal/>
    case 'REGISTER':
      return <RegisterModal/>
    default:
      return null
  }
}

const mapStateToProps = state => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps
})

export default connect(mapStateToProps)(ModalContainer)