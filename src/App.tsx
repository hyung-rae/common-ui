import { Button } from '@components/button'

function App() {
  return (
    <div>
      <Button disabled onClick={() => console.log(1)}>
        test
      </Button>
    </div>
  )
}

export default App
