import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCharacters } from './redux/actions'
import Home from './pages/Home'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    //  const fetchData = async () => {
    //    const data = await fetchCharacters();
    //    dispatch(apiResponse(data));
    //  };
    //  fetchData();
    fetchCharacters(dispatch)
  }, [])
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
