function SearchBox({city, onCityChange, onFormSubmit}) {
    return (
      <form onSubmit={onFormSubmit} className="flex items-center justify-center m-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={onCityChange}
          className="bg-white bg-opacity-10 p-3 w-[300px] md:w-[500px] rounded-l-lg border-gray-300 placeholder-gray-300 text-white focus:outline-none"
        />
        <button type="submit" className="p-3 text-blue-500 bg-white rounded-r-lg hover:bg-blue-500 hover:text-white transition ease-in-out duration-300">
          Search
        </button>
      </form>
    );
  }
  
  export default SearchBox;