'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MultiSelect } from "react-multi-select-component";
import toast from 'react-hot-toast'
import { topUsersApi } from '@/api'

import Select from '@/components/Select'
import styles from './page.module.css'
import Button from '@/components/Button'
import Textarea from '@/components/Textarea'
import TextInput from '@/components/TextInput'
import ReviewBox from '@/components/ReviewBox'
import { useUserContext, useSetUserContext } from '@/context/UserContext'

import { membersApi, getConfig, getReviews, sendReview } from '@/api'
import TopUsers from '@/components/TopUsers'
import { topType } from '@/types'

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState<any[]>([])
  const [point, setPoint] = useState<string>('')
  const [review, setReview] = useState<string>('')
  const [tops, setTops] = useState<topType[]>([])
  const [members, setMembers] = useState<any[]>([])
  const [reviews, setReviews] = useState<
    {
      amount: number
      fromId: string
      toId: string[]
      description: string
      [key: string]: any
    }[]
  >([])

  const user = useUserContext()
  const setUser = useSetUserContext()
  const router = useRouter()

  // fetch configs
  useEffect(() => {
    fetchConfig()
  }, [])

  // fetch tops
  useEffect(() => {
    if (user.username) {
      fetchTops()
    }
  }, [user.username])

  //fetch members
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
          setMembers(res.data.map((item:any)=>{
            return {
              label:item.username,
              value:item.username
            }
          }))
        },
        (e: any) => {
          console.log(e)
        }
      )
    }
  }, [user.username])

  //fetch reviews
  useEffect(() => {
    if (user.username) {
      fetchReviews()
    }
  }, [user.username])

  const fetchConfig = () => {
    getConfig(
      (res: any) => {
        setUser(res.data)
      },
      (e: any) => {
        console.log(e)
        if (e.response.status === 403) {
          toast.error('اول لاگین کن')
          router.push('/login')
        }
        console.log(e.response)
      }
    )
  }

  const fetchTops = () => {
    const params = {
      user: user.username
    }
    topUsersApi(
      params,
      (res: any) => {
        setTops(res.data)
      },
      (e: any) => {
        console.log(e)
      }
    )
  }

  const fetchReviews = () => {
    const params = {
      user: user.username
    }
    getReviews(
      params,
      (res: any) => {
        setReviews(res.data)
      },
      (e: any) => {
        console.log(e)
      }
    )
  }

  const submitReview = () => {
    const params = {
      user: user.username
    }

    if (!selectedPerson) {
      toast.error('شخص مورد نظر رو انتخاب کن')
      return
    }
    if (!point) {
      toast.error('امتیاز رو وارد کن')
      return
    }
    if (!review) {
      toast.error('نظر رو وارد کن')
      return
    }

    const body = {
      transfer: {
        amount: parseInt(point),
        description: review,
        destination: selectedPerson.map(item=>item.value)
      }
    }
    sendReview(
      body,
      params,
      (res: any) => {
        fetchReviews()
        fetchConfig()
        fetchTops()
        setSelectedPerson([])
        setPoint('')
        setReview('')
      },
      (e: any) => {
        console.log(e)
        toast.error(e.response.data.error)
      }
    )
  }




  return (
    <div className={styles.container}>
      <div className={styles.infoBar}>
        <TopUsers tops={tops} />
      </div>
      <div className={styles.rateBox}>
        <div className={styles.row}>
          <p className={styles.title}>قدردانی کردن</p>
          <div className={styles.coinBox}>
            <p>سرمایه فعلی شما {user.assignedCoins}</p>
            <Image src={'/coin.svg'} alt='coin' width={20} height={20} />
          </div>
        </div>
        <div className={styles.inputContainer}>
        <MultiSelect
        options={members}
        value={selectedPerson}
        onChange={setSelectedPerson}
        labelledBy="select users"
        overrideStrings={{ "selectSomeItems": "لطفا یکی رو انتخاب کن"}} // <- to override strings
      />

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
        <div className={styles.reviewContainer}>
          <h2>نظرات اعطا شده</h2>
          {reviews.map((review, index) => (
            <ReviewBox review={review} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
