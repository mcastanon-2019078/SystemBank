'use strict'

import jwt from 'jsonwebtoken'

export const createToken = async (payload) => {
  try {
    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '3h',
      algorithm: 'HS256',
    })
  } catch (error) {
    console.error(error)
    return error
  }
}