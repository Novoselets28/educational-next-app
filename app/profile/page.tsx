import { authConfig } from '@/configs/auth'
import { getServerSession } from 'next-auth'

export default async function Profile() {
    const session = await getServerSession(authConfig)
  return (
    <div>Profile of {session?.user?.name}</div>
  )
}

