import React from 'react'

function Projects() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-white font-bold text-4xl uppercase">Projects</h1>
        <span className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] text-transparent bg-clip-text tracking-widest">
          EXPLORE NOW
        </span>
      </div>
      {/* <div className="inline-block rounded-lg p-[1px] bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 w-full h-20"> */}
        <div className="bg-black text-white my-5 px-6 py-2 rounded-lg text-sm font-medium h-full flex justify-center items-center border-2 border-[#585858]">
          <p className="text-[#E1E1E1] text-xl">Coming Soon</p>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Projects