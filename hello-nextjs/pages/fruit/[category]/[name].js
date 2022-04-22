// rafce

import React from 'react'
import {useRouter} from 'next/router';

const FruitName = () => {

  const router = useRouter()

  return (
    <div>
      <h1>This is {router.query.name} {router.query.category}</h1>
    </div>
  )
}

export default FruitName

// http://localhost:3000/fruit/apple   -> Working
// http://localhost:3000/fruit/banana  -> Working
// http://localhost:3000/fruit/category/mango  --> Working