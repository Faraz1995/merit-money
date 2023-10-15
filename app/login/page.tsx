'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import styles from './login.module.scss'

import { loginApi } from '../../api'

const Page: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()
  const enterHandler = () => {
    const data = {
      username,
      password
    }
    loginApi(
      data,
      (res: any) => {
        router.push('/')
        console.log(res)
      },
      (e: any) => {
        console.log(e)
      }
    )
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.inputContainer}>
          <TextInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='نام کاربری'
          />
        </div>

        <div className={styles.inputContainer}>
          <TextInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='رمز عبور'
            isPassword={true}
          />
        </div>
        <div>
          <Button onClick={enterHandler}>
            <p>ورود</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page
