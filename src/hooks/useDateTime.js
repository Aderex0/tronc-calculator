import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DateTimePicker } from '@material-ui/pickers'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

const styles = {
  input: {
    height: '65px',
    border: '1px solid turquoise',
    fontSize: '6vw',
    color: 'black',
    marginBottom: '15px',
    width: '100%',
    marginTop: '5px',
    textAlignLast: 'center'
  }
}
const useDateTime = ({ classes, handleChange, value }) => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <DateTimePicker
      value={value}
      onChange={handleChange}
      autoOk
      ampm={false}
      InputProps={{ className: classes.input, disableUnderline: true }}
    />
  </MuiPickersUtilsProvider>
)

useDateTime.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(useDateTime)
