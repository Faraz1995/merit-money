import React from 'react'
import styles from './select.module.scss'
type selectProps = {
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  selectedValue: string
}
function Select(props: selectProps) {
  return (
    <select
      className={styles.select}
      value={props.selectedValue}
      onChange={props.onChange}
    >
      {props.children}
    </select>
  )
}

export default Select
