import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {indexCount: 0}

  OnLeftArrow = () => {
    const {indexCount} = this.state
    if (indexCount> 0) {
      this.setState(prevState => ({indexCount: prevState.indexCount - 1}))
    }
  }

  OnRightArrow = () => {
    const {indexCount} = this.state
    const {reviewsList}=this.props
    if (indexCount< (reviewsList.length)-1) {
      this.setState(prevState => ({indexCount: prevState.indexCount + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {indexCount} = this.state
    const item=reviewsList[indexCount]
    return (
      <div className="page-container">
        <div className="review-container">
          <button testid="leftArrow" type="button" className="arrow">
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              onClick={this.OnLeftArrow}
            />
          </button>
          <div className="review-text-container">
            <h1 className="heading">Reviews</h1>
            <img className="image" alt={item.username} src={item.imgUrl} />
            <p className="username">{item.username}</p>
            <p className="company-name">{item.companyName}</p>
            <p className="description company-name">{item.description}</p>
          </div>
          <button testid="rightArrow" type="button" className="arrow">
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              onClick={this.OnRightArrow}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
