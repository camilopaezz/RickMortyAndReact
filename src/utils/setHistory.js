import getHistory from './getHistory'

const LOCAL_VARIABLE_NAME = 'appHistory'

export default function setHistory (name, link) {
  const history = getHistory()
  const newData = {
    history: history.concat([{ name, link }])
  }

  const data = JSON.stringify(newData)
  window.localStorage.setItem(LOCAL_VARIABLE_NAME, data)
}
