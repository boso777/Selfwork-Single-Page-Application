import './index.css'
import Navbar from './assets/components/Navbar';
import Header from './assets/components/Header'
import List from './assets/components/List';

function App() {

  const name = "Mario";
  const names = ['Luca' , 'Mario' , 'Antonio' , 'Carlo'];
  return (  
    <>
    <Navbar></Navbar>
    <Header></Header>
    <List names={names}></List>
    <h1 className='title'>ciao {name ? name: 'sconosciuto'}</h1>
    <img className="" src="https://picsum.photos/200" alt="" />
    
    <div>
      <input type="text" id="sampletext" className='input'/>
      <label htmlFor="sampletext" className='label'>Prova Label</label>
    </div>
    
    
    </>
  )
}

export default App
