import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Display from './Display'

const Data = () => {
  return (
    <>
      <Navbar />
      <Display image={"https://imgs.search.brave.com/sQbNaPYt2PVLlq6Y9AqhRGB2LexidbjKYCbzDlLd1Fs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9pbWFnZXMv/aW1hZ2VzMjUwMHgy/NTAwL2FzdXNfeDU1/M21hX2RiMDFfMTVf/Nl9ub3RlYm9va19j/b21wdXRlcl8xMTAx/NDE4LmpwZw"} name={"raj"} location={"lazimpat"} />
      <Display image={"https://imgs.search.brave.com/sQbNaPYt2PVLlq6Y9AqhRGB2LexidbjKYCbzDlLd1Fs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9pbWFnZXMv/aW1hZ2VzMjUwMHgy/NTAwL2FzdXNfeDU1/M21hX2RiMDFfMTVf/Nl9ub3RlYm9va19j/b21wdXRlcl8xMTAx/NDE4LmpwZw"} name={"A"} location={"B"} />
      <Display image={"https://imgs.search.brave.com/sQbNaPYt2PVLlq6Y9AqhRGB2LexidbjKYCbzDlLd1Fs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9pbWFnZXMv/aW1hZ2VzMjUwMHgy/NTAwL2FzdXNfeDU1/M21hX2RiMDFfMTVf/Nl9ub3RlYm9va19j/b21wdXRlcl8xMTAx/NDE4LmpwZw"} name={"C"} location={"D"} />
      <Footer />
    </>
  )
}

export default Data