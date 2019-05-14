import React from 'react'
// import PropTypes from 'prop-types'

export default class Navbar extends React.Component {
  render () {
    return (
      <nav>
       <div className="nav-wrapper blue darken-2">
         <a href="#" className="brand-logo">Grange Easy Quote</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
           <li><a href="sass.html">Home</a></li>
           <li><a href="badges.html">Commercial</a></li>
           <li><a href="collapsible.html">Others</a></li>
         </ul>
       </div>
     </nav>
    )
  }
}
