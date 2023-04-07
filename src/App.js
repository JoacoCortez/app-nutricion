import MealList from './components/meal-list/mealList';
import Measurer from './components/measurer/measurer';
import NavBar from './components/nav-bar/navBar';
import MealPlan from './components/mealPlan/mealPlan';
import FooterMobile from './components/footerMobile/footerMobile';
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
      <FooterMobile/>
    </div>
  )
}

export default App;
