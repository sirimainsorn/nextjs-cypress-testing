import Button from '@/components/Button'
import React, { useState } from 'react'

interface Props {}

function Counter(props: Props) {
  const {} = props
  const [count, setCount] = useState(0)

  return (
    <>
      <p id='counter'>{count}</p>
      <Button id='increment' color='green' size='sm' disabled onClick={() => setCount(count + 1)}>
        +
      </Button>
    </>
  )
}

export default Counter
