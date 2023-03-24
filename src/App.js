import MealList from './components/meal-list/mealList';
import Measurer from './components/measurer/measurer';
import NavBar from './components/nav-bar/navBar';
import MealPlan from './components/mealPlan/mealPlan';
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <MealList/>
      <div className='section-divisor'>
        <Measurer/>
        <MealPlan/>
      </div>
    </div>
  )
}

export default App;
