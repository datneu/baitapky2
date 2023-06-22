import Sortbar from './component/Sortbar'
import Cart from './component/Cart'
import Cart2 from './component/Cart2'
import Cart3 from './component/Cart3'
import Cart4 from './component/Cart4'
import Cart5 from './component/Cart5'
import './component/Pcmail-catelogy.css'
import './component/buldle.css'
import './App.css'

function App() {

  return (
    <>
    <Sortbar />
    <div className='row shopee-search-item-result__items'>
      <Cart />
      <Cart2/>
      <Cart3/>
      <Cart4/>
      <Cart5/>
    </div>
    </>
  )
    
}

export default App
