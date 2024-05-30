import { useState } from 'react'

import writingSystemsObj from './js/writing-systems'

import WritingSystemsDisplay from './components/WritingSystemsDisplay'

import './App.css'

function App() {
  const [writingSystems, setWritingSystems] = useState(writingSystemsObj)

  return (
    <>
      <WritingSystemsDisplay
      writingSystems={writingSystems}
      setWritingSystems={setWritingSystems} />
    </>
  )
}

export default App
