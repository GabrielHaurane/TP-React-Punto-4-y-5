import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormularioTarea from './components/FormularioTarea';
import Footer from './components/Footer.jsx';

function App() {
  

  return (
    <>
    <main className='container my-5'>
      <h1 className='text-center text-light'>Bienvenidos</h1>
      <h2 className='text-center text-light'>ingresa tus tareas</h2>
      <FormularioTarea></FormularioTarea>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
