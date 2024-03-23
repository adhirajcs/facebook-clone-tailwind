import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import fbLogo from './assets/fb.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
  <div className="left">
    <img src={fbLogo} alt />
    <p>Facebook helps you connect and share with the people in your life.</p>
  </div>
  <div className="right">
    <input type="text" placeholder="Email address or phone number" />
    <input type="password" placeholder="password" />
    <button className="btn">Login</button>
    <span>Forgotten Password</span>
    <hr />
    <button className="btn">Create New Account</button>
  </div>
</div>

    </>
  )
}

export default App
