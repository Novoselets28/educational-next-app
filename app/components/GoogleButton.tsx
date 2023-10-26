'use client'
import { Button } from "@mui/material"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

const GoogleButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  return (
    <Button variant="contained" onClick={()=> signIn('google', {callbackUrl})}>Sign in with Google</Button>
  )
}

export {GoogleButton}
