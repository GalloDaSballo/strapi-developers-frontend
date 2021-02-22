import Link from "next/link"
import { useEffect, useState } from "react"
import { useMagic, useUser } from "../context/UserContext"
import { Profile } from "../types"
import { API_URL } from "../utils/urls"

/**
 * If the user is logged in, fetch their profile data
 * @param user 
 */
const useInitialProfileData = (user, magic) => {
  const [profileData, setProfileData] = useState<Profile | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      if(!user){
        return setProfileData(null)
      }

      try{
        const token = await magic.user.generateIdToken()
        const res = await fetch(`${API_URL}/profiles/my`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        const profile = await res.json()
        setProfileData(profile)
      } catch(err){
        setProfileData(null)
      }
    }
    fetchData()
  }, [user])

  return profileData
}



const EditProfilePage: React.FC = () => {
  const user = useUser()
  const magic = useMagic()

  const profileData = useInitialProfileData(user, magic)

  /**
   * If the user is logged in, update their profile
   * TODO FINALIZE
   * @param user 
   */
  const updateUserData = async (user) => {
    const token = await magic.user.generateIdToken()
    const res = await fetch(`${API_URL}/profiles/`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        // Add body and Data here
      })
    })
} 

  console.log("profileData", profileData)
  if(!user) {
    return (
      <div>
        Please Login first
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    )
  }

  if(!profileData){
    return <div><h2>Loading your profile</h2></div>
  }

  return(
    <div>
      <h2>Edit your Profile</h2>

    </div>
  )
}

export default EditProfilePage