import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import icon from './search.svg';
import NewRecipe from './NewRecipe';



function App() {
  const KEY = '09fb61e0559955cba49596d6624db8ed';
  const ID = '461e9163';

  const [mySearch, setMySearch] = useState('');
  const [myRecipies, setMyRecipies] = useState([]);
  const [word, setWord] = useState('');

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${word}&app_id=${ID}&app_key=${KEY}`);
      const result = await response.json();
      setMyRecipies(result.hits);
    }
    getRecipe();
  }, [word])

  const myFoodSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWord(mySearch);
  }

  return (
    <div>
      <div className='container'>
        <div>
          <video autoPlay muted loop> <source src={video} type='video/mp4' /></video>
          <h1>FIND a RECIPE</h1>
        </div>
        <form onSubmit={finalSearch}>
          <div className='search'>
            <img className='icon' src={icon} width='40px' alt='pic' />
            <input className='field'
            placeholder='Search..'
            onChange={myFoodSearch}
            value={mySearch}>
            </input>
          </div>
        </form>
      </div>
      <div className="container_recipe">
        {myRecipies.map((element, index) => (
          <NewRecipe anyRecipe={element} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
