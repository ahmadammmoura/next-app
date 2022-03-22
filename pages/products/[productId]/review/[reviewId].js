import React from 'react'
import { useRouter } from 'next/router'
function Review() {

    const router = useRouter();

    const {reviewId,productId} = router.query
  return (
    <div>product {productId} review {reviewId}</div>
  )
}

export default Review