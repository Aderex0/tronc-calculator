import React from 'react'
import useContentStore from '../store/ContentStore'

import { IoIosMenu, IoIosCalculator } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'

export const Sidebar = () => {
  const setDisplayCalculatorById = useContentStore(
    state => state.setDisplayCalculatorById
  )

  const toggleSidebar = () => {
    const btn = document.getElementsByClassName('sidebar-container')[0]
    const header = document.getElementsByTagName('header')[0]
    const calculators = document.getElementsByClassName(
      'calculators-container'
    )[0]

    btn.style.left === '-250px'
      ? (btn.style.left = '0px')
      : (btn.style.left = '-250px')

    header.style.position === 'fixed'
      ? (header.style.position = 'relative')
      : (header.style.position = 'fixed')

    calculators.style.marginTop === '50px'
      ? (calculators.style.marginTop = '0px')
      : (calculators.style.marginTop = '50px')
  }

  return (
    <div className='sidebar-container' style={{ left: '-250px' }}>
      <div
        className='toggle-btn'
        data-testid='sidebar-action'
        onClick={() => toggleSidebar()}
      >
        <IoIosMenu size='50px' color='rgb(102, 51, 153)' />
      </div>
      <ul>
        <li></li>
        <li
          data-testid='sidebar-tronc-click'
          onClick={() => {
            setDisplayCalculatorById(1)
          }}
        >
          <span>
            <IoIosCalculator size='30px' viewBox='0 0 470 470' />
          </span>
          <p>Tronc Calculator</p>
        </li>
        <li data-testid='sidebar-earnings-click'>
          <span>
            <GiReceiveMoney size='30px' />
          </span>
          <p>Earnings Calculator</p>
        </li>
      </ul>
    </div>
  )
}
