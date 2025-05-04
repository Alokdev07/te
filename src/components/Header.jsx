import React,{useState} from 'react'
import PagesList from './PagesList'
import { toggleValue } from '../Store/Hamburger'
import { createSlice } from '@reduxjs/toolkit'
import { useDispatch,useSelector } from 'react-redux'

function Header() {
    const isOpen = useSelector((state) => state.HamData.isOpen)
    const dispatch = useDispatch()
    const hamburgerSet = () => {
      dispatch(toggleValue())
    }
    
  return (
    <>
    <nav className="w-screen bg-slate-200 h-10 p-1 flex justify-between items-center">
    <div className="flex justify-center items-center gap-2 font-semibold text-xl">
      <button className="text-2xl ml-3 font-bold" onClick={hamburgerSet}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#000000"
          fill="none"
        >
          <path
            d="M20 12L10 12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 5L4 5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 19L4 19"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button onClick={hamburgerSet} className={`relative left-[106px] top-[12px] text-white text-sm z-30 ${isOpen ? "block" : "hidden" }`}>❌</button>
      <p>EcoDocs</p>
    </div>
    <div className="flex justify-center items-center gap-2">
      <div className="h-8 w-8 rounded-full bg-green-800 flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          color="#FFFFFF"
          fill="none"
        >
          <path
            d="M21.9598 10.9707C22.0134 11.8009 22.0134 12.6607 21.9598 13.4909C21.6856 17.7332 18.3536 21.1125 14.1706 21.3905C12.7435 21.4854 11.2536 21.4852 9.8294 21.3905C9.33896 21.3579 8.8044 21.2409 8.34401 21.0513C7.83177 20.8403 7.5756 20.7348 7.44544 20.7508C7.31527 20.7668 7.1264 20.9061 6.74868 21.1846C6.08268 21.6757 5.24367 22.0285 3.99943 21.9982C3.37026 21.9829 3.05568 21.9752 2.91484 21.7351C2.77401 21.495 2.94941 21.1626 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4666 2.1401 15.036 2.04024 13.4909C1.98659 12.6607 1.98659 11.8009 2.04024 10.9707C2.31441 6.72838 5.64639 3.34913 9.8294 3.07107C11.0318 2.99114 11.2812 2.97856 12.5 3.03368"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9953 12.5H12.0043M15.9908 12.5H15.9998M7.99982 12.5H8.00879"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <div className="h-8 w-8 bg-green-800 rounded-full">
        <img className="h-8 w-8 rounded-full" src="https://img.pikbest.com/png-images/20241001/3d-boy-graduate-student_10910902.png!w700wp" alt="" />
      </div>
    </div>
  </nav>

  </>
  )
}

export default Header
