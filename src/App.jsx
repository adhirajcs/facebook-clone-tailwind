import fbBanner from './assets/fb.svg'
import './App.css'

function App() {

  return (
    <>
      
      <div className="container mt-28 flex items-center justify-center">
        {/* Left */}
        <div className="left w-1/2">
          <img className='w-80' src={fbBanner} alt />
          <p className='text-3xl mx-6 text-left'>Facebook helps you connect and share with the people in your life.</p>
        </div>

        {/* Right */}
        <div className="right flex flex-col bg-white p-8 rounded-lg shadow-lg w-1/3 relative">
          <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-md" type="text" placeholder="Email address or phone number" />
          <input className="px-4 h-12 my-2 border border-1 border-gray-300 rounded-md" type="password" placeholder="password" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-3 my-2 rounded-md">Log in</button>
          <span className='text-blue-600 text-center text-md my-2 cursor-pointer hover:underline'>Forgotten Password?</span>
          <hr className=''my-2 />
          <button className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-3 my-2 rounded-md w-fit px-4 mx-auto">Create New Account</button>
          <span className="absolute -bottom-12"><span className="font-bold hover:underline cursor-pointer">Create a Page</span> for a celebrity, brand or business.</span>
        </div>
      </div>
      

    </>
  )
}

export default App
