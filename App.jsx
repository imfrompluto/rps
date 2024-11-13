import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import rock from './assets/rock.svg'
import paper from './assets/paper.svg'
import scissors from './assets/scissors.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(3) 
  const [blocked, setBlocked] = useState(false)
  const [countdownclass, setCountdownclass] = useState("")
  const [playercount, setPlayercount] = useState(0)
  const [botcount, setBotcount] = useState(0)
  const [handclass, setHandclass] = useState("")
  const [bothandclass, setBothandclass] = useState("")
  const [options, setOptions] = useState([rock, paper, scissors])
  const [botoption, setBotoption] = useState(0)
  const [playeroption, setPlayeroption] = useState(0)
  const [gradientid, setGradientid] = useState("")

useEffect(() => {
  setTimeout(() => {
    setCountdownclass("countdownactive")
  }, 1000)
}, [playercount, botcount])

  function handleoption(option){
    setCountdownclass("countdownactive")
    setHandclass("")
    setBothandclass("")
    setCount(3)
    setBlocked(true)
    console.log(3);
    setGradientid("")
    let countinterval = setInterval(() => {
      setCount(c => {
        let nextcount = c - 1
        if (nextcount == 0){
          setHandclass("handsvisible")
          setBothandclass("botvisible")
          setCountdownclass("")
          setBlocked(false)
          clearInterval(countinterval)

          let nextbotoption = Math.floor(Math.random()*3)
          setBotoption(nextbotoption)
          setPlayeroption(option)
          if (option == 0 && nextbotoption == 1){
            setBotcount(b => b+1)
            setGradientid("lose")
          }
          if (option == 0 && nextbotoption == 2){
            setPlayercount(p => p+1)
            setGradientid("win")
          }
          if (option == 1 && nextbotoption == 0){
            setPlayercount(p => p+1)
            setGradientid("win")
          }
          if (option == 1 && nextbotoption == 2){
            setBotcount(b => b+1)
            setGradientid("lose")
          }
          if (option == 2 && nextbotoption == 0){
            setBotcount(b => b+1)
            setGradientid("lose")
          }
          if (option == 2 && nextbotoption == 1){
            setPlayercount(p => p+1)
            setGradientid("win")
          }
          else{
            
          }

        }
        return nextcount
      })
    }, 1000);
  }
  return (
    <div className="App">
      <div id="game">
        <div id={gradientid} className="gradient"></div>
        <h1>rock, paper, scissors!</h1>
        <h3 className={countdownclass} id='countdown'>{count} </h3>
        <div className="hands">
          <img src={options[playeroption]} className={handclass} alt="" />
          <img src={options[botoption]} className={bothandclass} alt="" />
        </div>
        <div className="scoreboard">
          <h3>{playercount}</h3>
          <h3>{botcount}</h3>
        </div>
        <div className="buttons">
          <button disabled = {blocked} onClick={() => handleoption(0)}></button>
          <button disabled = {blocked} onClick={() => handleoption(1)} id='paper'></button>
          <button disabled = {blocked} onClick={() => handleoption(2)} id='scissors'></button>
        </div>
      </div>
    </div>
  )
}

export default App
