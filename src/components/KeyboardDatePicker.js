import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import { InlineDatePicker } from "material-ui-pickers";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DatePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          {/* <DatePicker
            margin="normal"
            value={props.selectedDate}  
            onChange={props.changed}
            keyboard
            onlyCalendar
            format="MM/dd/yyyy"
            mask={value => (value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : [])}
          /> */}
          <div className="picker">
            <InlineDatePicker
            onlyCalendar
            keyboard
            value={props.selectedDate}
            onChange={props.changed}
            format="MM/dd/yyyy"
            mask={value => (value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : [])}
          />
      </div>
        </Grid>
      </MuiPickersUtilsProvider>    
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);