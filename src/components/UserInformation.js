
// ./react-redux-client/src/components/Todo.js
import React from 'react';
import { Table } from 'react-bootstrap';

export default class UserInformation extends React.Component {
    
  // let blockedDateTimeRanges = [
  //   {
  //     start: new Date('2018-11-06 08:00:00'),
  //     end: new Date('2018-11-06 20:00:00')
  //   },
  //   {
  //     start: new Date('2020-11-03 08:00:00'),
  //     end: new Date('2020-11-03 20:00:00')
  //   }
  // ];

  componentDidMount(){
    this.props.fetchUserInformation();
  }

  

  render(){
    const userInformationState = this.props.mappedUserInformationState;
    return(
      <div>
       <h2>User Information</h2>
         {!userInformationState.userInformation && userInformationState.isFetching &&
           <div>
             <p>Loading todo....</p>
           </div>
         }
       {userInformationState.userInformations && !userInformationState.isFetching &&
         <div>
           {/* <h3>{userInformationState.userInformations}</h3> */}
           <h3>Hi i am in User Information Components</h3>
           <Table>
               <thead>
               <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
               </tr>
               </thead>
               
               
               {/* {userInformationState.userInformations.phoneNumbers.map((item, idx) => {
                    return (<th key={idx}><th>);
               })
               } */}
               <tbody>
                    {
                        userInformationState.userInformations.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                        </tr>
                        })  
                    }
               </tbody> 
           </Table>
         </div>
       }
      </div>
    );
  }
}