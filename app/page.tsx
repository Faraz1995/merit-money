'use client'
import { useState } from 'react'
import Select from '@/components/Select'
import styles from './page.module.css'
import Button from '@/components/Button'
import Textarea from '@/components/Textarea'
import TextInput from '@/components/TextInput'

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState<string>('')
  const [point, setPoint] = useState<string>('')
  const [review, setReview] = useState<string>('')

  const submitReview = () => {
    console.log('submit')
    setSelectedPerson('')
    setPoint('')
    setReview('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.rateBox}>
        <div className={styles.inputContainer}>
          <Select
            selectedValue={selectedPerson}
            onChange={(e) => setSelectedPerson(e.target.value)}
          >
            <option value=''>لطفا یکی رو انتخاب کن</option>
          </Select>
        </div>
        <div className={styles.inputContainer}>
          <TextInput
            placeholder='چند سکه'
            value={point}
            onChange={(e) => setPoint(e.target.value)}
          />
        </div>
        <div className={styles.textContainer}>
          <Textarea value={review} onChange={setReview} placeholder='نظر خودت رو بنویس' />
        </div>
        <div className={styles.btnContainer}>
          <Button onClick={submitReview}>
            <p>قدردانی</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
