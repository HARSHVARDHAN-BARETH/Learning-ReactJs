import React from 'react'
import UserData from "./jason.json"

function FetchData() {
  return (
    <div>
        <h2>Fetch Data from JASON File</h2>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {
        UserData.map((users, index)=>(
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{users.name}</td>
            <td>@{users.username}</td>
            <td>{users.address}</td>
            <td>{users.phone}</td>
          </tr>
        ))
    }
   
    
  </tbody>
</table>
    </div>
  )
}

export default FetchData
