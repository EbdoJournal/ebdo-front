import { EventTypes } from 'redux-segment'
import {
  POST_SUBSCRIPTION,
  SET_PAYMENT_METHOD,
  SET_CGV_CONFIRM,
  POST_SUBSCRIPTION_LOADED,
  POST_SUBSCRIPTION_ERROR,
  NEW_CHECKOUT,
  NEW_CHECKOUT_TRY
} from 'actions/constants'

export function setPayementMethod(method) {
  return {
    type: SET_PAYMENT_METHOD,
    method
  }
}

export function setCgvConfirm() {
  return {
    type: SET_CGV_CONFIRM
  }
}

export function postCheckout() {
  return {
    type: POST_SUBSCRIPTION
  }
}
export function postCheckoutLoaded(checkout, offer) {
  return {
    type: POST_SUBSCRIPTION_LOADED,
    checkout,
    meta: {
      analytics: [
        {
          eventType: EventTypes.track,
          eventPayload: {
            event: 'Completed Order',
            properties: {
              orderId: checkout.checkout_id,
              total: offer.duration,
              revenue: offer.price_ttc / 100,
              currency: '€',
              category: offer.description
            }
          }
        }
      ]
    }
  }
}

export function postCheckoutError(errorMessage, errorCode) {
  return {
    type: POST_SUBSCRIPTION_ERROR,
    errorMessage,
    errorCode
  }
}

export function newCheckout() {
  return {
    type: NEW_CHECKOUT
  }
}

export function newCheckoutTry() {
  return {
    type: NEW_CHECKOUT_TRY
  }
}
