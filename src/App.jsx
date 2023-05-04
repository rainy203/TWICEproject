import { useState } from 'react'
import React from "react"
import './App.css'
import Navbar from "./Navbar.jsx"
import data from "./Twicedatabase"
import Cards from "./Cards.jsx"
import Modal from "./modal.jsx"
function App() {
  const [isOpen,setIsOpen] = React.useState(false)
  const [twiceItems, setTwiceItems] = React.useState({})
 


  const cards = data.map(items => {
    return(
      <div>
    <Cards 
      image = {items.img}
      names = {items.name}
      ages = {items.age} 
      ranks = {items.ranking}
      onClose = {() => setIsOpen(true)}
      toModal = {() => setTwiceItems( twiceItems => {
        return [{...items}]
       
      })}
      

 />
 <Modal 
      images = {setTwiceItems.img}
      
      names = {setTwiceItems.name}
      ages = {setTwiceItems.age} 
      ranks = {setTwiceItems.ranking}
      open = {isOpen}
      />
 
 </div>
 
    
    

    )})
  return(
    <div className = "maincontainer">
      
      <Navbar />
      <section className = "cardsec">
      {cards}

      </section>
      
      
      

    </div>
  )
}

export default App
