import React from 'react'
import Image from 'next/image'
import styles from './review.module.scss'

type Review = {
  fromId: string
  toId: string
  amount: number
  description: string
}

type Props = {
  review: Review
}

function ReviewBox(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p> قدردانی کرده از {props.review.toId}</p>
        <p>{props.review.amount} سکه</p>
      </div>
      <div className={styles.userBox}>
        <div className={styles.avatar}>
          <Image src='/avatar.svg' alt='Profile Picture' width={50} height={50} />
        </div>
        <p>{props.review.fromId}</p>
      </div>
      <div className={styles.review}>
        <p>{props.review.description}</p>
      </div>
    </div>
  )
}

export default ReviewBox
