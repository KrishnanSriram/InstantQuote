import React from 'react'
import PropTypes from 'prop-types'

class ImageCard extends React.Component {
  render () {
    const title = this.props.title;
    const buttonTitle = this.props.buttonTitle;
    return (
      <div className = "row">
        <div className = "col s12 m7">
          <div className = "card medium">
            <div className = "card-image">
              <img src="https://materializecss.com/images/sample-1.jpg" />
              <span className = "card-title">{title}</span>
            </div>
            <div className = "card-content">
              <p>Please upload a picture of {title} here. We'll process the picture and give an instant quote! Keep an eye for errors/more information as you upload relevant images!</p>
            </div>
            <div className = "card-action">
              <a class="waves-effect waves-light btn-small blue darken-2">UPLOAD</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageCard;
