import React from 'react'
import styles from './text.module.scss'

type textareaProps = {
  placeholder: string
  value: string
  onChange: (value: string) => void
}

function Textarea(props: textareaProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.target.value)
  }
  return (
    <textarea
      value={props.value}
      onChange={handleChange}
      placeholder={props.placeholder}
      id='text'
      name='text'
      rows={4}
      className={styles.text}
    />
  )
}

export default Textarea
