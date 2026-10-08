import React from 'react'

function ICard(props) {

  return (
    <div style={{
      border: '10px solid red',
      height: '500px',
      width: '300px',
      marginLeft: '20px',
      marginTop: '20px'
    }}>

      <h2 style={{
        backgroundColor: 'brown',
        color: 'white',
        margin: '0',
        textAlign: 'center'
      }}>
        ABES Engineering College
      </h2>

      <img
        src={props.pic}
        height={200}
        width={200}
        style={{ display: 'block', margin: '10px auto' }}
      />

      <h3>Roll: {props.roll}</h3>
      <h3>Name: {props.name}</h3>
      <h3>Branch: {props.branch}</h3>

    </div>
  )
}

export default ICard