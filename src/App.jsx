import Header from "./components/Header"
import WeatherApp from "./components/WeatherApp"
import Background from "./assets/bg.png"


function App() {
  
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-cover bg-center "  style={{ backgroundImage: `url(${Background})` }}>
      <div className="md:p-7 p-0 flex flex-col justify-center items-center backdrop-blur-md bg-blue-900/1 shadow-xl shadow-gray-900 rounded-xl p-8 md:w-[800px] w-[500px]">
      <Header/>
      <WeatherApp/>
      </div> 
    </div>
  )
}

export default App
