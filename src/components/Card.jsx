import React, { useState } from 'react'
import swords from "../assets/img/swords.png"
import dot from "../assets/img/dot.png"
import Menu from './Menu'

export default function Card({ img, title }) {
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        setShowMenu(!showMenu)
    }
    const closeMenu = () => {
        setShowMenu(false)
    }

    return (
        <>
            <div className='card'>
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-text">
                    <div className="flex-title">
                        <h2 className='card-title'>{title}</h2>
                        <span className='premium'>Premium</span>
                    </div>
                    <p className='recreate'>Recreate this wallpaper using AI.</p>
                    <div className="flex-btn">
                        <button className='start-btn'>
                            <img src={swords} alt="" />
                            Start Challenge
                        </button>
                        <div className="menu-container">
                            <button className="open-menu" onClick={openMenu}>
                                <img src={dot} alt="" />
                            </button>
                            {showMenu && (
                                <Menu />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className="overlay" onClick={closeMenu}></div>
            )}
        </>
    )
}
