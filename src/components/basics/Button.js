// @flow
import React from 'react'

import { dangerButton, successButton, warningButton } from '@/styles'

type ButtonPropsType = {
  buttonType: 'danger' | 'success' | 'warning',
  children: React$Node,
  className: object,
  onClick: () => void,
}

export default ({
  buttonType,
  children,
  className,
  onClick,
}: ButtonPropsType) => {
  const classNames = [
    buttonType === 'danger' && dangerButton,
    buttonType === 'success' && successButton,
    buttonType === 'warning' && warningButton,
  ]
  return (
    <button css={[classNames, className]} onClick={onClick}>
      {children}
    </button>
  )
}
