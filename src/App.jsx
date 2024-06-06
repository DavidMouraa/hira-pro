import { useState } from 'react'

import writingSystemsObj from './js/writing-systems'

import Header from './components/Header'
import WritingSystemsDisplay from './components/WritingSystemsDisplay'

import './App.css'

function App() {
  const [writingSystems, setWritingSystems] = useState(writingSystemsObj)

  return (
    <>
      <Header />
      <WritingSystemsDisplay
      writingSystems={writingSystems}
      setWritingSystems={setWritingSystems} />
    </>
  )
}

export default App
