import React from 'react'
import PropTypes from 'prop-types'

import injectSaga from 'utils/injectSaga'

import { compose } from 'redux'

import sagaOffer from 'saga/offer'
import sagaCheckout from 'saga/checkout'
import sagaToken from 'saga/token'
import sagaAddress from 'saga/address'
import sagaClient from 'saga/client'
import sagaLogin from 'saga/login'

class StoreSaga extends React.Component {
  render() {
    return this.props.children
  }
}

StoreSaga.propTypes = {
  children: PropTypes.element.isRequired
}

const withSagaOffer = injectSaga({ key: 'offer', saga: sagaOffer })
const withSagaToken = injectSaga({ key: 'token', saga: sagaToken })
const withSagaCheckout = injectSaga({ key: 'checklout', saga: sagaCheckout })
const withSagaClient = injectSaga({ key: 'client', saga: sagaClient })
const withSagaAddress = injectSaga({ key: 'address', saga: sagaAddress })
const withSagaLogin = injectSaga({ key: 'login', saga: sagaLogin })

export default compose(
  withSagaOffer,
  withSagaToken,
  withSagaCheckout,
  withSagaAddress,
  withSagaClient,
  withSagaLogin
)(StoreSaga)
