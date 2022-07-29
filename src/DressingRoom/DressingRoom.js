import React from 'react'
import './DressingRoom.css'
import DressingRoomTitle from './DressingRoomTitle'
import DressingRoomItem from './DressingRoomItem'
import DressingRoomModel from './DressingRoomModel'
import DressingRoomFooter from './DressingRoomFooter'

export default function DressingRoom() {
  return (
    <div className="container-fluid">
      <DressingRoomTitle />
      <div className='row mt-3'>
        <DressingRoomItem />
        <DressingRoomModel />
      </div>
      <DressingRoomFooter/>
    </div>
  )
}
