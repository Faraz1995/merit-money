import React from 'react'
import styles from './input.module.scss'
type inputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  isPassword?: boolean
}
function TextInput(props: inputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        type={props.isPassword ? 'password' : 'text'}
        value={props.value}
        onChange={props.onChange}
        placeholder={''}
        className={styles.input}
      />
      <label className={styles.label} htmlFor=''>
        {props.placeholder}
      </label>
    </div>
  )
}

export default TextInput
