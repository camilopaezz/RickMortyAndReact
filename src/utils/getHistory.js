const LOCAL_VARIABLE_NAME = 'appHistory'

export default function getHistory () {
  const getLocalHistory = () => {
    const data = window.localStorage.getItem(LOCAL_VARIABLE_NAME)
    return data ? JSON.parse(data) : { history: [] }
  }

  const { history } = getLocalHistory()

  return history
}
