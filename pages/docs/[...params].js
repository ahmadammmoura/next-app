import React from 'react'
import { useRouter } from 'next/router'

function Doc() {

    const router = useRouter()
    const {params = []} = router.query
    console.log(params)
  return (
    <div>Docs home page </div>
  )
}

export default Doc