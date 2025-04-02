import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function NavBar() {
  return (
    <>
    <div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Shop</li>
      </ul>
    </div>
    <div className='bg-color-blue'>
      <UserButton />
    </div>
    </>
  )
}

export default NavBar