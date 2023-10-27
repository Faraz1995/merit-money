import React from 'react'
import styles from './top.module.css'
import Image from 'next/image'
import { topType } from '@/types'
type propType = {
  tops: topType[]
}
function TopUsers({ tops }: propType) {
  return (
    <div className={styles.container}>
      <h2>نفرات برتر</h2>
      <div>
        <ul>
          {tops?.map((item: topType) => (
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
