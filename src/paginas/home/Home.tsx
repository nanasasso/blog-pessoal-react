//import React from 'react';
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-red-800 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-red-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="https://img.freepik.com/vetores-gratis/ilustracao-japonesa-desenhada-a-mao-de-flores-de-cerejeira-e-fa-japones_23-2149601829.jpg?t=st=1708006484~exp=1708007084~hmac=940b14d28b8ff5f8caba46faa667e6f5969ffdb65eca6b1e21a905fbaa9abe6e" alt="leque" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;