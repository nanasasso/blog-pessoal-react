//import React from 'react';
import './Home.css';
import ListaPostagem from '../../components/postagem/listaPostagem/ListaPostagem';
import ModalPostagem from '../../components/postagem/modalPostagem/ModalPostagem';

function Home() {
    return (
        <>
        <div className="bg-red-800 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-conversa_114360-1102.jpg?w=996&t=st=1708555651~exp=1708556251~hmac=bb0e7069ad7d4ad910aab59675d920a7247621b1d41807900c7baefc3811b9c9" alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagem />
      </>
    );
}

export default Home;
