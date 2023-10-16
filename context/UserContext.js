'use client'
import React, { useState, useContext, useMemo } from 'react'

const UserContext = React.createContext()
const SetUserContext = React.createContext()

function UserProvider(props) {
  const [user, setUser] = useState({})

  const memoizedUser = useMemo(() => user, user.nid)

  return (
    <UserContext.Provider value={memoizedUser}>
      <SetUserContext.Provider value={setUser}>
        {props.children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  const memoizedUser = useContext(UserContext)
  if (memoizedUser === undefined) {
    throw new Error('render <UserProvider /> at top of the tree')
  }
  return memoizedUser
}

const useSetUserContext = () => {
  const setUser = useContext(SetUserContext)
  if (setUser === undefined) {
    throw new Error('render <UserProvider /> at top of the tree')
  }
  return setUser
}

export { useUserContext, useSetUserContext }
export default UserProvider
