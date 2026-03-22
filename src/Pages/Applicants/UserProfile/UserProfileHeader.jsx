import ProfileHeader from '@/Pages/Profile/ProfileHeader/ProfileHeader'
import React from 'react'

function UserProfileHeader({ userId }) {
  return (
    <div>
      <ProfileHeader viewUserId={userId}/>
      
    </div>
  )
}

export default UserProfileHeader
