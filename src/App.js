import { useState } from 'react'

//components
import FilterOptions from './components/FilterOptions'
import FoodListCard from './components/FoodListCard'


function App() {
  const [ listDisplay, setListDisplay ] = useState("food-list-card")
  return (
    <div className="App">
      <FilterOptions list={{listDisplay, setListDisplay}}/>
      <FoodListCard 
        title="American Doble Cheddard Burger"
        imageUrl="https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg"
        info="Medallon de carte Roast-Beef 400gr con doble agregado de queso cheddard, tomate, lechuga, paleta y queso mantecoso Colonia Orcovi y salsa aleoli de la casa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel consectetur a deleniti, suscipit atque fugit provident, tempora nemo est architecto dolores necessitatibus illo quaerat. Reiciendis reprehenderit amet eos dignissimos alias!"
        price="$300"
        star="3"
        style={listDisplay}
      />
      <FoodListCard 
        title="Blue Cheese Burger"
        imageUrl="https://ci6.googleusercontent.com/proxy/7orCDgPJYPtFx8-XukTyGP5xAPzu0OsBazcpy6I6MnxT4If9P1TUmlYLolcFmDp9dQCf4lDP3BeEVtBtpmdC87P6TXhaT1s7WR3Ql0yixyxmtMu1FyZ5v0PYCgobufwepVqd9p_0zrf5z7M8c9TvSkLW3e1662oVd02f2Mg=s0-d-e1-ft"
        info="Medallon de carte Roast-Beef 400gr rucula, tomate, cebolla caramelizada, paleta, pepino y salsa aleoli de la casa... Ahh y roquefort."
        category="Mas vendido"
        price="$250"
        star="5"
        style={listDisplay}
      />
    </div>
  );
}

export default App;