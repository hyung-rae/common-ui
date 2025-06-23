import { Typography } from './components/typography'

function App() {
  return (
    <div>
      <div style={{ width: '300px', border: '1px solid #121212' }}>
        <Typography variant="h1" as="h1">
          h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1
        </Typography>

        <Typography variant="d1">d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1</Typography>

        <Typography variant="b3_long" as="p">
          b3_longb3_longb3_longb3_longb3_longb3_longb3_longb3_longb3_longb3_longb3_longb3_longb3_longb3_longb3_longb3_long
        </Typography>
      </div>

      <Typography variant="d1">d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1</Typography>

      <Typography variant="b3_long">b3_long</Typography>
    </div>
  )
}

export default App
