import React, { useEffect, useState } from 'react'
import { topUsersApi } from '@/api'
import styles from './top.module.css'
import Image from 'next/image'
function TopUsers({ user }) {
  const [tops, setTops] = useState<{ username: string; receivedCoins: number }[]>()
  useEffect(() => {
    if (user.username) {
      const params = {
        user: user.username
      }
      topUsersApi(
        params,
        (res) => {
          setTops(res.data)
        },
        (e) => {
          console.log(e)
        }
      )
    }
  }, [user.username])
  return (
    <div className={styles.container}>
      <h2>نفرات برتر</h2>
      <div>
        <ul>
          {tops?.map((item) => (
            <li key={item.username} className={styles.topRow}>
              <p>{item.username}</p>
              <div className={styles.coinBox}>
                <p>{item.receivedCoins}</p>
                <Image src={'/coin.svg'} alt='coin' width={20} height={20} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TopUsers
