import React from 'react'

    const Sidenav = () => {
      return (
        <div className="h-screen w-max bg-white p-5 border-1 border-gray-300 rounded-lg">
          <ul className=" flex flex-col gap-3">
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              Dashboard
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              Internships
            </li>
    
            <li className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 text-white">
              Skill Test
            </li>
          </ul>
        </div>
      );
    };


export default Sidenav