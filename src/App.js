import MealList from './components/meal-list/mealList';
import Measurer from './components/measurer/measurer';
import NavBar from './components/nav-bar/navBar';
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <MealList/>
      <Measurer/>
    
    
    </div>
  )
}

export default App;
