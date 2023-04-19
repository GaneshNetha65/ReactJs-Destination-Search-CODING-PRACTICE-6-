import {Component} from 'react'

import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeValue = event => {
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchResults)
    return (
      <div>
        <h1 className="heading">Destination Search</h1>
        <div className="input">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeValue}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="Search icon"
            className="search-icon"
          />
        </div>
        <ul className="destinations-list">
          {searchResults.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
