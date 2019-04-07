import React, { Component } from 'react';
import KeyboardDatePicker from './KeyboardDatePicker';
import * as moment from 'moment';

class AppGlobalDateRangeComponent extends Component {

      componentDidMount() {
        this.calculateStartDate();
        this.calculateEndDate();
      }
    
      handleStartDateChange = date => {
        console.log(date);
        this.props.setStartDate(date);
      };

      handleEndDateChange = date => {
        this.props.setEndDate(date);
      };
    
      calculateStartDate = () => {
        let now = moment().add(-1, 'y').format("MM/DD/YYYY");
        this.props.setStartDate(now);
      }
    
      calculateEndDate = () => {
        let now = moment().format('MM/DD/YYYY');
        this.props.setEndDate(now);
      }
      render() {
        const { startDate, endDate } = this.props.mappedDateRangeState;
        console.log("START DATE : ", startDate);
          return (
              <div style={{ display: "flex", justifyContent: 'flex-end', alignItems: 'center', marginRight: '20px', width: '300px' }}>
                <KeyboardDatePicker label="Start Date" selectedDate={startDate} changed={this.handleStartDateChange}></KeyboardDatePicker>
                <span>-&nbsp;</span>
                <KeyboardDatePicker label="End Date" selectedDate={endDate} changed={this.handleEndDateChange}></KeyboardDatePicker>
              </div>
            )
        }
}

export default AppGlobalDateRangeComponent