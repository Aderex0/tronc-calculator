import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { KeyboardDateTimePicker } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import React from 'react'

const styles = {
  input: {
    height: '65px',
    border: '1px solid turquoise',
    fontSize: '6vw',
    color: 'black',
    marginBottom: '15px',
    width: '100%',
    marginTop: '5px',
    textAlignLast: 'center',

    '@media screen and (min-width: 600px)': {
      fontSize: '3vw'
    }
  }
}

const useDateTime = ({ classes, handleChange, value, testId }) => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <KeyboardDateTimePicker
      data-testid={testId}
      value={value}
      onChange={handleChange}
      autoOk
      ampm={false}
      InputProps={{
        className: classes.input,
        disableUnderline: true
      }}
      format='DD/MM/YYYY HH:mm'
    />
  </MuiPickersUtilsProvider>
)

useDateTime.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(useDateTime)
