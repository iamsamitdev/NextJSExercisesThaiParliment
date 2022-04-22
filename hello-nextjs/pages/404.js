import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Error404 = () => {
  return (
    <div>
        <Head>
            <title>404 Not found</title>
            <link rel="icon" href="/images/favicon/favicon-96x96.png" />
        </Head>
        <h1>ไม่พบหน้าที่เรียก</h1>
        <p><Link href="/"><a>กลับไปหน้าหลัก</a></Link></p>
    </div>
  )
}

export default Error404