import React from 'react'

function Navbar({user}) {
    return (
        <nav className="flex justify-between py-2 items-center">
            <p className=" text-2xl font-bold text-grey-800 ">Todos</p>
            <div className=" flex ">
              {!user && <a href="/api/auth/login" className=" rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Login</a>} 
                 {user && <a href="/api/auth/logout" className=" rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ">Logout</a>
               }
            </div>
            
        </nav>
    )
}

export default Navbar
