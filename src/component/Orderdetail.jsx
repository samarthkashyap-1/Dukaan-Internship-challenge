import React from 'react'

const Orderdetail = () => {
  return (
     <div className="flex gap-10 justify-between py-[14px] px-3 h-12 border-b-2 text-[#4D4D4D] text-[14px] font-medium ">
                    <div className="flex gap-1 flex-1  h-5 text-[#146EB4]">
                      <p className="my-auto">#281209</p>
                    </div>
                    <div className="flex gap-1 flex-1  h-5  ">
                      <p className="my-auto ">7 July,2023</p>
                    </div>
                    <div className="flex gap-1 flex-1  h-5 justify-end">
                      <p className="my-auto ">₹1,278.23</p>
                    </div>
                    <div className="flex gap-1 flex-1 h-5  justify-end">
                      <p className="my-auto ">₹22</p>
                    </div>
                    </div>
  )
}

export default Orderdetail
