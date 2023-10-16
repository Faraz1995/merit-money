'use client'
import { useEffect, useState } from 'react'
import Select from '@/components/Select'
import styles from './page.module.css'
import Button from '@/components/Button'
import Textarea from '@/components/Textarea'
import TextInput from '@/components/TextInput'
import ReviewBox from '@/components/ReviewBox'
import { useUserContext, useSetUserContext } from '@/context/UserContext'

import { membersApi, getConfig, getReviews, sendReview } from '@/api'

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState<string>('')
  const [point, setPoint] = useState<string>('')
  const [review, setReview] = useState<string>('')
  const [members, setMembers] = useState<{ username: string }[]>([])
  const [reviews, setReviews] = useState<
    {
      amount: number
      fromId: string
      toId: string
      description: string
      [key: string]: any
    }[]
  >([])
  const user = useUserContext()
  const setUser = useSetUserContext()

  useEffect(() => {
    fetchConfig()
  }, [])

  const fetchConfig = () => {
    getConfig(
      (res) => {
        setUser(res.data)
      },
      (e) => {
        console.log(e)
      }
    )
  }

  useEffect(() => {
    if (user.username) {
      const params = {
        user: user.username
      }
      const body = {
        team: 'kilid'
      }
      membersApi(
        params,
        body,
        (res: any) => {
          setMembers(res.data)
        },
        (e: any) => {
          console.log(e)
        }
      )
    }
  }, [user.username])

  useEffect(() => {
    if (user.username) {
      fetchReviews()
    }
  }, [user.username])

  const fetchReviews = () => {
    const params = {
      user: user.username
    }
    getReviews(
      params,
      (res) => {
        setReviews(res.data)
      },
      (e) => {
        console.log(e)
      }
    )
  }

  const submitReview = () => {
    const params = {
      user: user.username
    }
    const body = {
      transfer: {
        amount: parseInt(point),
        description: review,
        destination: selectedPerson
      }
    }
    sendReview(
      body,
      params,
      (res) => {
        fetchReviews()
        setSelectedPerson('')
        setPoint('')
        setReview('')
      },
      (e) => {
        console.log(e)
      }
    )
    console.log('submit')
  }
  console.log(members)
  return (
    <div className={styles.container}>
      <div className={styles.rateBox}>
        <div className={styles.row}>
          <p className={styles.title}>قدردانی کردن</p>
          <p>سرمایه فعلی شما {user.assignedCoins}</p>
        </div>
        <div className={styles.inputContainer}>
          <Select
            selectedValue={selectedPerson}
            onChange={(e) => setSelectedPerson(e.target.value)}
          >
            <option value=''>لطفا یکی رو انتخاب کن</option>
            {members.map((member) => (
              <option key={member.username} value={member.username}>
                {member.username}
              </option>
            ))}
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

      <div>
        {reviews.map((review, index) => (
          <ReviewBox review={review} key={index} />
        ))}
      </div>
    </div>
  )
}
