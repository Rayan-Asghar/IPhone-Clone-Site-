import React from 'react'
import {appleImg, searchImg, bagImg} from '../utils';

function Navbar() {
  return (
    <header>
        <nav >
            <img src ={appleImg} alt="Apple" width={"14"} height={"18"}/>
            <div>
                {['Phones', 'Macbooks', 'Tablets'].map((nav, i)=>(
                    <div key={nav}>
                        {nav}
                    </div>
                ))}
            </div>
            <div>
                <img src={searchImg} alt='search' width={"14"} height={"18"}/>
                <img src={bagImg} alt='search' width={"14"} height={"18"}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
