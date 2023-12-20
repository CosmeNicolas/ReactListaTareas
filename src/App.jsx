import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormularioTareas from './components/FormularioTareas';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap'

function App() {
  

  return (
    <>
    <Container>
      <h1 className='text-center display-3'>Lista de Tareas</h1>
     <FormularioTareas></FormularioTareas>
    </Container>
    <Footer/>
    </>
  )
}

export default App
