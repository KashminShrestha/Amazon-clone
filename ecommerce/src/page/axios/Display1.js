import React, { useEffect, useState } from 'react'
import axios from "axios"
import Data from './Data'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

const Display1 = () => {
  const [post, setPosts] = useState([])
  const [index, setIndex] = useState(6)
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => res.data.slice(0, index))
      .then(data => {
        setPosts(data)
        console.log(data)

      })
  }, [index])
  return (

    <>
      <Navbar />

      <div>
        <div className="height d-flex justify-content-center align-items-center row row-cols-1 row-cols-3 g-4">

          {
            post.map((p) => {
              return <Data p={p} />
            })
          }



        </div>
        <div>
          {
            index > 6 && <button type="button" class="btn btn-primary btn-lg float-right" onClick={() => { setIndex(index - 3) }}>Show Less</button>


          }


          {
            index < 20 && <button type="button" class="btn btn-primary btn-lg float-right" onClick={() => { setIndex(index + 3) }}>Show More</button>

          }

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Display1