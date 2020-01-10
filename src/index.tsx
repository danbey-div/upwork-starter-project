import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import { Spinner } from './components/shared/spinner'
import Calendar from './components/Calendar'

console.info(`⚛️ ${React.version}`)

const App: FC = () => (
  <>
    <Calendar
      value={new Date()}
      onChange={(date: Date) => {
        console.log(date)
      }}
    />
    <GlobalStyle />
    <Spinner />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
