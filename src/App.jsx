import './App.css'
import RouteToSuccess from './components/routetosucess'
import Header from './components/Header'
import ImgSlider from './components/ImgSliderText'
import ImageFlow from './components/ImageFlow'
import 'avenir';


function App() {

  return (
    <div>
      <Header />
      <RouteToSuccess/> 
      <ImgSlider/>
      <ImageFlow />
    </div>
  )
}

export default App
