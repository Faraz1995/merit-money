import React from 'react'
import styles from './button.module.scss'
type buttonProps = {
  children: React.ReactNode
  onClick: () => void
}
function Button(props: buttonProps) {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
