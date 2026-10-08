import React from 'react'
import ICard from './ICard'
import king from '../images/king.png'
import dog from '../images/dog.png'
import pig from '../images/pig.png'
import leon from '../images/leon.png'
import r from '../images/r.png'
import h from '../images/h.png'



function ICardGallery() {

  const student = [
    {
      pic: king,
      roll: '80808',
      name: 'SAHIL',
      branch: 'CSE - AIML'
    },
    {
      pic: leon,
      roll: '25643',
      name: 'harsh',
      branch: 'CSE - AIML'
    },
    {
      pic: r,
      roll: '456734',
      name: 'ved',
      branch: 'CSE - DS'
    },
    {
      pic: h,
      roll: '75853',
      name: 'vaibhav',
      branch: 'CSE - DS'
    }
  ]

  return (
    <div style={{ display: 'flex' }}>
  {student.map((ele, index) => {
    return <ICard key={index} {...ele} />
  })}
</div>
  )
}

export default ICardGallery