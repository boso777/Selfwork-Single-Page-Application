import './index.css'
import Navbar from './assets/components/Navbar';
import Header from './assets/components/Header'
import List from './assets/components/List';
import Counter from "./assets/components/Counter";
import Form from './assets/components/form';

function App() {

  const name = "Mario";
  
  
  return (  
    <>
    <Navbar></Navbar>
    <Header></Header>
    <Counter></Counter>
    
    <h1 className='title'>ciao {name ? name: 'sconosciuto'}</h1>
    <img className="" src="https://picsum.photos/200" alt="" />
    
    <div>
      <input type="text" id="sampletext" className='input'/>
      <label htmlFor="sampletext" className='label'>Prova Label</label>
    </div>
    
    <Form></Form>    
    </>
  )
}

export default App
