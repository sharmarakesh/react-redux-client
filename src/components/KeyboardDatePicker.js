import React, { Fragment, useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from '@date-io/moment';
import { InlineDateTimePicker } from "material-ui-pickers";
import { DateRangePicker } from 'material-ui-datetime-range-picker';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
  InlineDatePicker
} from "material-ui-pickers";

function KeyboardDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    // <Fragment>
    //   <div className="picker">
    //     <DatePicker
    //       keyboard
    //       clearable
    //       label="Uncontrolled input"
    //       value={selectedDate}
    //       onChange={handleDateChange}
    //       animateYearScrolling={false}
    //       minDate={new Date()}
    //       onInputChange={e => console.log("Keyboard Input:", e.target.value)}
    //     />
    //   </div>

    //   <div className="picker">
        
    //   </div>
    // </Fragment>
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //   <div className="picker">
    //     <InlineDateTimePicker
    //       keyboard
    //       ampm={false}
    //       label="With keyboard"
    //       value={selectedDate}
    //       onChange={handleDateChange}
    //       onError={console.log}
    //       disablePast
    //       format={props.getFormatString({
    //         moment: "YYYY/MM/DD hh:mm A",
    //         dateFns: "yyyy/MM/dd HH:mm",
    //       })}
    //       mask={[
    //         /\d/,
    //         /\d/,
    //         /\d/,
    //         /\d/,
    //         "/",
    //         /\d/,
    //         /\d/,
    //         "/",
    //         /\d/,
    //         /\d/,
    //         " ",
    //         /\d/,
    //         /\d/,
    //         ":",
    //         /\d/,
    //         /\d/,
    //       ]}
    //     />
        
    //   </div>
    // </MuiPickersUtilsProvider>
    <DateRangePicker
    autoOk={true}
    autoOpenField={true}
    showCalendarStatus={true}
    className="my-date-picker"
    firstDayOfWeek={0}
    dayButtonSize="6.25vw"
    calendarDateWidth="80vw"
    calendarTimeWidth="40vw"
    local='en-US'
    mode='portrait'
    startLabel='Beginning'
    endLabel='Ending'
/>
  );
}

export default KeyboardDatePicker;
