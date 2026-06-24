import './index.css'
import Navbar from './assets/components/Navbar';
import Header from './assets/components/Header'
import Counter from "./assets/components/Counter";
import Form from './assets/components/form';

function App() {

  const name = "Mario";
  const names = ['Luca' , 'Mario' , 'Antonio' , 'Carlo',];
  
  
  return (  
    <>
    <Navbar></Navbar>
    <Header></Header>
      <Counter>
        <Counter.List>
          {names.map((single_name)=>{
                  return(
                      <li>{single_name}</li>
                  )
              })}
        </Counter.List>
      </Counter>
    
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
