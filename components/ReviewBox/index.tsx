import React from 'react'
import Image from 'next/image'
import styles from './review.module.scss'
type Review = {
  user: string
  kudosTo: string
  point: string
  review: string
}

const mock: Review = {
  user: 'faraz',
  kudosTo: 'nima',
  point: '50',
  review: 'fggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
}

function ReviewBox(props?: Review) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p> قدردانی کرده از {mock.kudosTo}</p>
        <p>{mock.point}</p>
      </div>
      <div className={styles.userBox}>
        <div className={styles.avatar}>
          <Image
            src='/avatar.svg' // Specify the path to your image in the public directory
            alt='Profile Picture'
            width={50} // Set the width of the image
            height={50} // Set the height of the image
          />
        </div>
        <p>{mock.user}</p>
      </div>
      <div className={styles.review}>
        <p>{mock.review}</p>
      </div>
    </div>
  )
}

export default ReviewBox
