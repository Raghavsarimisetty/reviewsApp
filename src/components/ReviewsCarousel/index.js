import React, {useState} from 'react'
import './index.css'

function ReviewsCarousel(props) {
  const count = 0
  const [state, setState] = useState(count)
  const {details} = props
  const {imgUrl, username, companyName, description} = details[state]

  function leftClick() {
    if (state === 0) {
      return
    }
    setState(prevState => prevState - 1)
  }
  function rightClick() {
    if (state === details.length - 1) {
      return
    }
    setState(prevState => prevState + 1)
  }
  return (
    <div className="container">
      <h1 className="heading">Reviews</h1>
      <div className="sub-container">
        <button testid="leftArrow" onClick={leftClick}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            alt="left arrow"
          />
        </button>
        <div className="image-container">
          <img src={imgUrl} alt={username} className="image" />
          <p className="para1">{username}</p>
          <p className="para2">{companyName}</p>
          <p className="para3">{description}</p>
        </div>
        <button testid="rightArrow" onClick={rightClick}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel
