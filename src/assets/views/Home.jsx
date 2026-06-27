import Navbar from '../components/Navbar';
import Header from '../components/Header';
import List from '../components/List';
import Counter from "../components/Counter";
import Form from '../components/form';
import LoadingData from '../components/LoadingData';
import { useState } from 'react';

function Home() {
  const name1 = "Mario";
  const names = ['Luca', 'Mario', 'Antonio', 'Carlo'];
  const surgo = ['Nana', 'Marta', 'Lois', 'Pippo'];

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const label1 = "name";
  const label2 = "mail";

  return (
    <>
      <Header></Header>
      <Counter></Counter>
      <List>
        {surgo.map((single_name) => {
          return (
            <List.Item>{single_name}</List.Item>
          )
        })}
      </List>

      <h1 className='title'>ciao {name1 ? name1 : 'sconosciuto'}</h1>
      <img className="" src="https://picsum.photos/200" alt="" />

      <div>
        <input type="text" id="sampletext" className='input' />
        <label htmlFor="sampletext" className='label'>Prova Label</label>
      </div>

      <Form fieldValue1={name} fieldValue2={mail}>
        <Form.FormField fieldName={label1} fieldFunct={setName}></Form.FormField>
        <Form.FormField fieldName={label2} fieldFunct={setMail}></Form.FormField>
      </Form>
      <LoadingData url="https://jsonplaceholder.typicode.com/users"></LoadingData>
    </>
  );
}

export default Home;
