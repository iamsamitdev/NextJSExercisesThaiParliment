import React from 'react'
import {useRouter} from 'next/router'

const FoodName = () => {
    
  const router = useRouter()
  console.log(router.query)

  return (
    <div>
        <ul>
            <li>{router.query.name[0]}</li>
            <li>{router.query.name[1]}</li>
            <li>{router.query.name[2]}</li>
        </ul>
    </div>
  )
}

export default FoodName