import React from 'react'

import { useMyHook } from 'react-use-country-region'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
