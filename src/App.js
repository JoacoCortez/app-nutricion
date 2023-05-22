import MealList from './components/meal-list/mealList';
import Measurer from './components/measurer/measurer';
import NavBar from './components/nav-bar/navBar';
import MealPlan from './components/mealPlan/mealPlan';
import FooterMobile from './components/footerMobile/footerMobile';
import "./App.css";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <div className='page'>
            <MealList/>
            <div className='section-divisor'>
              <Measurer/>
              <MealPlan/>
            </div>
          </div>
        }/>
        
        <Route path='/PlansMobile' element={<MealPlan/>}/>
      </Routes>
      <FooterMobile/>
    </div>
  )
}

export default App;
