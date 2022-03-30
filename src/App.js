import React, {useEffect, useState} from 'react'
import Recipe from './Recipe';
import Footer from './Footer'
import './App.css';

function App() {

  const APP_ID = "91b2552f";
  const APP_KEY = "8042e92c644645f81e2186616bb75f7e";

  const [recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    //console.log(data);
    setRecipes(data.hits);
  };
  

  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>search</button>
      </form>
      <div className='recipe'>
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
     </div> 
     <Footer />
  </div>
  );
}

export default App;
