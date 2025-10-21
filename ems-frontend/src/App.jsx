
import './App.css'
import EmpoyeeComponents from './components/EmpoyeeComponents'
import FooterComponents from './components/FooterComponents'
import HeaderComponents from './components/HeaderComponents'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
 
  return (
    <>
      <BrowserRouter>

       <HeaderComponents />

        <Routes>

           {/* // https:locallhost:3000 */}
          <Route path='/' element = {<ListEmployeeComponents />}></Route>

          {/* //  https:locallhost:3000/employees */}
          <Route path='/employees' element = {<ListEmployeeComponents />}></Route>

              {/* //  https:locallhost:3000/add-employees */}
         <Route path='/add-employees' element = {<EmpoyeeComponents />}></Route>

          {/* //  https:locallhost:3000/edit-employees/1 */}

          <Route path='/edit-employee/:id' element ={<EmpoyeeComponents/>}></Route>

          
        </Routes>
       
       < FooterComponents />

     </BrowserRouter>
    
  
    </>
  )
}

export default App
