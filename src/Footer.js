import React from 'react'


let CurrentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {CurrentYear} | Evans Kiprotich</p>
    </footer>
  );
}

export default Footer