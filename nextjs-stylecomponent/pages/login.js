// rafce
import React from 'react'
import MainLayout from "../src/components/layouts/MainLayout"
import Link from 'next/link'

const login = () => {
  return (
    <MainLayout title="Login">
        <div className="container-fluid" style={{marginTop: 100}}>
            <div className="rounded d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-3 shadow-lg p-5 pb-0">
                <form>
                    <div />
                    <div className="pt-4">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Email" />
                        <label htmlFor="email">อีเมล์</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="Password" />
                        <label htmlFor="password">รหัสผ่าน</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        จำฉันไว้
                        </label>
                    </div>
                    <button className="btn btn-primary text-center mt-3 w-100" name="login" type="submit">
                        เข้าสู่ระบบ
                    </button>
                    <p className="text-center mt-5">ยังไม่เป็นสมาชิก ?
                        <Link href="/register">
                            <a className="text-primary text-decoration-none"> ลงทะเบียนฟรี</a>
                        </Link>
                    </p>
                    <p className="text-center">
                        <Link href="/forgotpass">
                            <a className="text-primary text-decoration-none">ลืมรหัสผ่าน ?</a>
                        </Link>
                    </p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default login