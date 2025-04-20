function DetailsBox({ weather }) {

  return (
    <div className="flex justify-center items-center">
      <div className="mb-7 m-5 p-3 w-[200px] md:w-[300px] rounded-lg flex justify-center items-center bg-white bg-opacity-10 gap-12 custom-inset-shadow">
        <div className="text-white flex flex-col justify-center items-center m-0">
          <h1 className="text-white text-opacity-50 text-xl m-0">Humidity</h1>
          <h1 className="text-white text-2xl font-semibold">{weather.main.humidity}</h1>
        </div>
        <div className="hidden md:flex w-[1px] h-[50px] bg-white bg-opacity-30"></div>
        <div className="text-white flex flex-col justify-center items-center m-1">
          <h1 className="text-white text-opacity-50 m-1 text-xl">Wind</h1>
          <h1 className="text-white text-2xl font-semibold">{weather.wind.speed}</h1>
        </div>
      </div>
    </div>
  );
}

export default DetailsBox;