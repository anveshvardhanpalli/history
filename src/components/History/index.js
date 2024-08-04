import './index.css'

import {Component} from 'react'

import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {inputText: '', historyList: this.props.initialHistoryList}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onDelete = id => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(item => item.id !== id),
    }))
  }

  render() {
    const {initialHistoryList} = this.props
    const {inputText, historyList} = this.state
    const filterHistory = historyList.filter(id =>
      id.title.toLowerCase().includes(inputText.toLowerCase()),
    )

    return (
      <div>
        <div className="logos-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="input-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              placeholder="search History"
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div>
          {filterHistory.length > 0 ? (
            <ul>
              {filterHistory.map(item => (
                <HistoryItem
                  historyData={item}
                  onDelete={() => this.onDelete(item.id)}
                />
              ))}
            </ul>
          ) : (
            <ul>
              <p className="empty">There is no history to show</p>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default History
