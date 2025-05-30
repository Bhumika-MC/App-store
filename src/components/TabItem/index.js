// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, clickTabItem, isActive} = props
  const {displayText, tabId} = eachTab

  const onclickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${activeTabBtnClassName}`}
        type="button"
        onClick={onclickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
