import React from 'react'

import { IoIosMenu, IoIosCalculator } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'

import { Link } from 'react-router-dom'

export const Sidebar = () => {
  const toggleSidebarBtn = () => {
    const btn = document.getElementsByClassName('sidebar-container')[0]
    const header = document.getElementsByTagName('header')[0]
    const tools = document.getElementsByClassName('tools-container')[0]

    btn.style.left === '-250px'
      ? (btn.style.left = '0px')
      : (btn.style.left = '-250px')

    header.style.position === 'fixed'
      ? (header.style.position = 'relative')
      : (header.style.position = 'fixed')

    //when clicking sidebar, header becomes 'fixed', thus moving the tools container up. This prevents it
    tools.style.marginTop === '50px'
      ? (tools.style.marginTop = '0px')
      : (tools.style.marginTop = '50px')
  }

  const closeSidebar = () => {
    if (window.matchMedia('(max-width: 600px)')) {
      const btn = document.getElementsByClassName('sidebar-container')[0]
      const header = document.getElementsByTagName('header')[0]
      const tools = document.getElementsByClassName('tools-container')[0]

      btn.style.left = '-250px'
      header.style.position = 'relative'
      tools.style.marginTop = '0px'
    }
  }

  return (
    <div className='sidebar-container' style={{ left: '-250px' }}>
      <div
        className='toggle-btn'
        data-testid='sidebar-action'
        onClick={() => toggleSidebarBtn()}
      >
        <IoIosMenu size='50px' color='rgb(102, 51, 153)' />
      </div>
      <ul>
        <Link to='/tools/tronc-calculator'>
          <li data-testid='sidebar-tronc-click' onClick={() => closeSidebar()}>
            <span>
              <IoIosCalculator size='30px' viewBox='0 0 470 470' />
            </span>
            <p>Tronc Calculator</p>
          </li>
        </Link>
        <Link to='/tools/earnings-calculator'>
          <li
            data-testid='sidebar-earnings-click'
            onClick={() => closeSidebar()}
          >
            <span>
              <GiReceiveMoney size='30px' />
            </span>
            <p>Earnings Calculator</p>
          </li>
        </Link>
      </ul>
    </div>
  )
}
