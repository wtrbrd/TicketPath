import React, { Component } from 'react'

const TableHeader = () => {

  return ( 
    <thead>
      <tr>
          <th>
            Chat ID
          </th>
          <th>
            Support Tech
          </th>
          <th>
            Tags
          </th>
          <th>
            Date
          </th>
          <th>
            Did you go to IS? {/* This Needs a Checkbox*/}
          </th>
      </tr>
    </thead>
  )
}
//Chat ID, Tech Name, Tags, Create_Date, Is?
const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>#00000</td> {/* Chat ID*/}
        <td>Thom</td>   {/* Tech Name*/}
        <td> Billing </td>     {/* Tags*/}
        <td> Creation Date</td> {/*Create_Date*/}
        <td>No</td>     {/* ISIS?*/}
      </tr>
      <tr align="left">
        <td>#00000</td>
        <td>York</td>
        <td>#00000</td> 
        <td>Kind old</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>#00000</td>
        <td>Is</td>
        <td>cats</td>
        <td>#00000</td> 
        <td>Yes</td>
      </tr>
      <tr>
        <td>#00000</td> 
        <td>Kind old</td>
        <td>#00000</td> 
        <td>Kind old</td>
        <td>No</td> 
       </tr>
      
      </tbody>
  )
}

export default class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

