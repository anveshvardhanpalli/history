import './index.css'

const HistoryItem = props => {
  const {historyData, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyData
  return (
    <li className="history-item">
      <h1>{timeAccessed}</h1>
      <div className="title-data">
        <div className="logo">
          <img src={logoUrl} alt={title} />
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="domain">
          <p>{domainUrl}</p>
        </div>
      </div>
      <button type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
