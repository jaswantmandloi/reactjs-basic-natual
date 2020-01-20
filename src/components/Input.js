import React, { useState } from 'react'
import { levenshteinDesitance, levenshteinDesitanceSearch } from './Test'

const Input = () => {
  const [source, setSource] = useState('')
  const [target, setTarget] = useState('')

  console.log(
    'levenshteinDesitanceSearch',
    levenshteinDesitanceSearch({ source, target })
  )

  return (
    <>
      <div>
        <input
          type="text"
          value={source}
          onChange={event => {
            // const tt1 = check1()
            // console.log('tt1', tt1)
            setSource(event.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={target}
          onChange={event => {
            // const tt1 = check1()
            // console.log('tt1', tt1)
            setTarget(event.target.value)
          }}
        />
      </div>
    </>
  )
}

export default Input
