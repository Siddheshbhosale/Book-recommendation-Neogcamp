import React from 'react'
import './style.css'
import { useState } from "react";
import Booksdata from './Booksdata.js';

function App(){
  const [type,settype] = useState("PersonalGrowth");
  return(
    <div className="container">
        <h1 className="title">Siddhesh Book's recommendation</h1>
        <h2 className="info">Click the following option as per your interest</h2>
        <div className="buttons">
          {/* <button onClick={(e)=>{settype("Finance")}}>Finance</button>
          <button onClick={(e)=>{settype("sport")}}>sports</button>
          <button onClick={(e)=>{settype("javascript")}}>javascript</button>
          <button onClick={(e)=>{settype(Data structure)}}>Data structure</button> */}

          {Object.keys(Booksdata).map((value)=>(
          <button className="button" onClick={()=>(settype(value))}>{value}</button>
          ))}
        </div>

        <div className="types">{type} 👇</div>
        <div className="download">(Click on book Image to download it's softcopy)</div>

        <div className="bookscontainer">
        {Booksdata[type].map((book) => (
          <div className="bookItem">
            <a href={book.softcopy}><img
              className="bookImage"
              src={book.photoURL}
              alt={book.bookName}
            ></img></a>
            <div className="bookDetails">
              <div className="bookName">{book.bookName} </div>
              <div className="bookAuthor">{book.author}</div>
              <div className="bookRating"> {book.rating} </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}
export default App