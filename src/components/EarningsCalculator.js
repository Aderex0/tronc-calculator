import React from 'react'
import DateTime from '../hooks/useDateTime'

export const EarningsCalculator = () => {
  return (
    <>
      <form>
        <label id='Tr'>Tronc rate</label>
        <input
          className='earnings-tronc-percentage-field'
          data-testid='earnings-tronc-percentage-field'
          type='number'
          step='any'
          id='Tr'
        />
        <label id='Sc'>Service charge</label>
        <input
          className='earnings-service-charge-field'
          data-testid='earnings-service-charge-field'
          type='number'
          step='any'
          id='Sc'
        />
        <label id='Cp'>Checks paid</label>
        <input
          className='earnings-checks-paid-field'
          data-testid='earnings-checks-paid-field'
          type='number'
          step='any'
          id='Cp'
        />
        <label id='Cp'>Cash tips</label>
        <input
          className='earnings-cash-tips'
          data-testid='earnings-cash-tips'
          type='number'
          step='any'
          id='Ct'
        />
        <label>Shift start</label>
        <DateTime />
        <label>Shift end</label>
        <DateTime />
        <input
          className='calculate-earnings-btn'
          data-testid='calculate-earnings-btn'
          type='submit'
          value='Calculate!'
          step='any'
        />
      </form>
    </>
  )
}

// EarningsCalculator.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(EarningsCalculator)
