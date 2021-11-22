import React from 'react'

const Form = () => {
    return (
        <div>
           <h2>Join the Community</h2>
        <form className="form ml-10 border-2 border-gray-500 rounded p-2 w-80">
          <div className="flex flex-col text-cm mb-2 ">
            <label className="font-bold mb-2 text-gray-800" htmlFor="name">Your Name</label>
            <input type="text" className="w-auto rounded border-2 focus:outline-none p-2" placeholder="your name" />
            </div>
          <div className="flex flex-col text-cm mb-2">
          <label className="font-bold mb-2 text-gray-800" htmlFor="YoE">Years of Experience</label>
        <input type="text" className="w-auto rounded p-1 border-2 focus:outline-none" placeholder="YOE" />
        </div>
          <div className="flex flex-col text-cm mb-2">
          <label className="font-bold mb-2 text-gray-800" htmlFor="company">Your company</label>
            <input type="text"className="w-auto rounded p-1 mb-2 border-2 focus:outline-none" placeholder="currently working at.." />
         <button type="submit"  className="w-70 rounded bg-blue-800 text-white">Join the list</button>
          </div>
          
          </form>
          
        </div>
    )
}

export default Form
