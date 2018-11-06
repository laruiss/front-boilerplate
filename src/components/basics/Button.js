// @flow
import React from 'react'
import { cx } from 'emotion'

import { dangerButton, successButton, warningButton } from '@/styles'

type ButtonPropsType = {
  buttonType: 'danger' | 'success' | 'warning',
  children: React$Node,
  className: string,
  onClick: () => void,
}

export default ({
  buttonType,
  children,
  className,
  onClick,
}: ButtonPropsType) => {
  const classNames = cx({
    [`${dangerButton}`]: buttonType === 'danger',
    [`${successButton}`]: buttonType === 'success',
    [`${warningButton}`]: buttonType === 'warning',
  })
  return (
    <button className={`${classNames} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
