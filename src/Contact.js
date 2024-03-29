import React from 'react'
import Header from './Header'
import  './Contact.css'
import {MdContactPhone} from "react-icons/md"
import {BsPencilSquare} from "react-icons/bs"
import {MdMarkEmailUnread} from "react-icons/md"
import {BiHappyBeaming,BiSad} from "react-icons/bi" 
import { useState } from 'react'
const Contact = () => {
  const [click,setclick]=useState(false)
  const handleclick=()=> setclick(!click)
  return (
    <>
    <Header/>
    <div className="contact1">
    <img src='./assets/contact.png' alt='contactimg' className='contact-img'></img>
 <div className='namaste'><p className='p'>Namaste</p><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="170.000000pt" height="100.000000pt" viewBox="0 0 300.000000 169.000000" preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,169.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M1425 1323 c-30 -29 -56 -141 -95 -406 -13 -89 -24 -111 -49 -95 -15 9 -24 7 -50 -12 -18 -12 -30 -28 -27 -35 3 -9 -24 -24 -85 -45 -49 -18 -89 -37 -89 -42 0 -11 19 -6 117 32 l71 27 43 -66 c24 -36 45 -71 47 -77 2 -6 -60 -43 -138 -83 -77 -40 -140 -76 -140 -82 0 -5 2 -9 4 -9 2 0 68 33 145 74 87 46 149 72 161 69 22 -6 83 33 77 50 -2 6 14 26 34 44 l37 34 32 -30 c18 -16 70 -51 116 -77 49 -29 81 -54 79 -62 -8 -21 6 -42 29 -42 12 0 27 -5 33 -11 8 -8 17 -8 32 0 17 9 30 6 74 -19 56 -31 67 -35 67 -22 0 4 -27 22 -59 40 l-60 33 25 87 c13 48 24 91 24 95 0 7 19 4 58 -10 6 -3 12 0 12 6 0 6 -11 13 -25 17 -14 3 -31 18 -37 32 -15 30 -73 50 -99 33 -26 -16 -100 26 -121 69 -10 19 -24 92 -32 162 -17 143 -64 325 -85 329 -42 8 -115 3 -126 -8z m55 -29 c0 -8 -9 -14 -20 -14 -10 0 -23 -8 -28 -17 -16 -31 -52 -198 -52 -242 0 -66 17 -47 23 27 9 100 39 206 60 210 23 5 22 -25 -2 -46 -11 -10 -23 -42 -30 -76 -14 -75 -15 -199 -1 -191 6 3 10 34 10 67 0 75 19 188 31 188 10 0 13 -459 3 -484 -3 -8 -21 -26 -39 -40 l-33 -25 -45 69 -46 69 19 43 c11 25 25 98 34 174 15 127 57 292 79 306 15 9 37 -2 37 -18z m99 -94 c12 -44 29 -136 37 -205 21 -180 27 -191 152 -252 3 -1 -38 -165 -43 -171 -11 -13 -199 108 -215 138 -12 23 -14 490 -1 490 11 0 31 -124 31 -194 0 -30 5 -58 10 -61 14 -9 13 99 -2 186 -8 49 -17 74 -30 82 -23 15 -24 50 -1 45 20 -4 49 -108 59 -210 7 -68 24 -95 24 -37 0 39 -38 226 -51 251 -5 10 -19 18 -29 18 -22 0 -27 25 -7 33 21 9 44 -30 66 -113z m237 -462 c-45 -177 -62 -228 -74 -228 -8 0 -11 7 -8 18 3 9 17 62 32 117 29 111 31 115 46 115 6 0 8 -10 4 -22z m41 -6 c-19 -21 -22 -48 -7 -57 13 -8 -6 -53 -32 -75 -20 -16 -21 -20 -9 -43 10 -19 10 -29 2 -46 -7 -11 -16 -21 -22 -21 -6 0 -3 7 5 16 19 18 20 36 5 51 -15 15 0 60 22 66 20 5 28 57 9 57 -6 0 -8 11 -4 28 9 37 13 42 31 42 15 0 14 -2 0 -18z"/>
</g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="170.000000pt" height="100.000000pt" viewBox="0 0 300.000000 169.000000" preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,169.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M1425 1323 c-30 -29 -56 -141 -95 -406 -13 -89 -24 -111 -49 -95 -15 9 -24 7 -50 -12 -18 -12 -30 -28 -27 -35 3 -9 -24 -24 -85 -45 -49 -18 -89 -37 -89 -42 0 -11 19 -6 117 32 l71 27 43 -66 c24 -36 45 -71 47 -77 2 -6 -60 -43 -138 -83 -77 -40 -140 -76 -140 -82 0 -5 2 -9 4 -9 2 0 68 33 145 74 87 46 149 72 161 69 22 -6 83 33 77 50 -2 6 14 26 34 44 l37 34 32 -30 c18 -16 70 -51 116 -77 49 -29 81 -54 79 -62 -8 -21 6 -42 29 -42 12 0 27 -5 33 -11 8 -8 17 -8 32 0 17 9 30 6 74 -19 56 -31 67 -35 67 -22 0 4 -27 22 -59 40 l-60 33 25 87 c13 48 24 91 24 95 0 7 19 4 58 -10 6 -3 12 0 12 6 0 6 -11 13 -25 17 -14 3 -31 18 -37 32 -15 30 -73 50 -99 33 -26 -16 -100 26 -121 69 -10 19 -24 92 -32 162 -17 143 -64 325 -85 329 -42 8 -115 3 -126 -8z m55 -29 c0 -8 -9 -14 -20 -14 -10 0 -23 -8 -28 -17 -16 -31 -52 -198 -52 -242 0 -66 17 -47 23 27 9 100 39 206 60 210 23 5 22 -25 -2 -46 -11 -10 -23 -42 -30 -76 -14 -75 -15 -199 -1 -191 6 3 10 34 10 67 0 75 19 188 31 188 10 0 13 -459 3 -484 -3 -8 -21 -26 -39 -40 l-33 -25 -45 69 -46 69 19 43 c11 25 25 98 34 174 15 127 57 292 79 306 15 9 37 -2 37 -18z m99 -94 c12 -44 29 -136 37 -205 21 -180 27 -191 152 -252 3 -1 -38 -165 -43 -171 -11 -13 -199 108 -215 138 -12 23 -14 490 -1 490 11 0 31 -124 31 -194 0 -30 5 -58 10 -61 14 -9 13 99 -2 186 -8 49 -17 74 -30 82 -23 15 -24 50 -1 45 20 -4 49 -108 59 -210 7 -68 24 -95 24 -37 0 39 -38 226 -51 251 -5 10 -19 18 -29 18 -22 0 -27 25 -7 33 21 9 44 -30 66 -113z m237 -462 c-45 -177 -62 -228 -74 -228 -8 0 -11 7 -8 18 3 9 17 62 32 117 29 111 31 115 46 115 6 0 8 -10 4 -22z m41 -6 c-19 -21 -22 -48 -7 -57 13 -8 -6 -53 -32 -75 -20 -16 -21 -20 -9 -43 10 -19 10 -29 2 -46 -7 -11 -16 -21 -22 -21 -6 0 -3 7 5 16 19 18 20 36 5 51 -15 15 0 60 22 66 20 5 28 57 9 57 -6 0 -8 11 -4 28 9 37 13 42 31 42 15 0 14 -2 0 -18z"/>
</g>
</svg>
<form action="" className='form'>
<h2>Name</h2><BsPencilSquare className='icons'/>
<input type="text" name='name' placeholder='name' className='input'/>
<h2>Email</h2><MdMarkEmailUnread className='icons'/>
<input type="email" name="email" placeholder="@mail.com"  className='input'/>
<h2>Contact</h2><MdContactPhone className='icons'/>
<input type="numeric" id="number" placeholder="+91"  className='input'/>
<button type='submit' className='submit' onClick={handleclick}>Submit</button>

<p className='react-icons'>{click? (<BiHappyBeaming className='happy'/>) : (<BiSad className='sad'/>)
 }</p>
 <p>{click ? (<h2>Your response has been recorded!</h2>) : (<h3></h3>)}</p>
 </form>
</div> 
    </div>
    </>
  )
}
export default Contact
