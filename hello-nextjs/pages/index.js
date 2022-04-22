/* eslint-disable @next/next/no-img-element */
// const index = function index() {
// }

import Link from 'next/link';

// Component
const index = () => {
  return (
    <>
      <style jsx>
        {
          `
            .title {
              font-size: 80px;
              color: #c34f21;
            }
            .content {
              background-color: #16b573;
              color: #fff;
            }
          `
        }
      </style>
      <h1 style={{color:'#c8410c', fontSize: 60}}>สวัสดี Next JS</h1>
      <h1 className="title">ตัวอย่างหัวข้อ</h1>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        veritatis maiores ea a tempora enim ipsa quis placeat magnam laborum
        magni autem provident, repudiandae nisi cupiditate et voluptates tempore
        fuga.
      </p>
      <img src="/images/tea.png" alt="" width={150} />
      {/* สร้างเมนูแบบ Single page application */}
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default index;
