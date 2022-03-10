import { React } from 'react';

const Header = () => {
  return( 
    <nav className="h-20 container mx-auto items-center flex justify-between">
      <div>
        LOGO
      </div>
      <div className="hidden md:flex space-x-12">
        <a href="">About us</a>
        <a href="">Services</a>
        <a href="">Technologies</a>
        <a href="">Careers</a>
        <a href="">Contact</a>
      </div>
    </nav>
  )
}

export default Header;
