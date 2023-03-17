import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Rodape from './components/Rodape/Rodape';
import Time from './components/Time/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [ colaboradores , setColaboradores ] = useState ( [] )

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App" >
      <Banner />
      <Formulario
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => <Time 
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />

    </div>
  );
}

export default App;


/* 
https://scontent.fsod1-2.fna.fbcdn.net/v/t1.6435-9/51635327_309466446419716_6915673679078621184_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTDTDm2VBubWCE41gILEGKHg-y6CZfHMoeD7LoJl8cyknniU7S4mV5kxkmJVNLURLLx8kUPMxnJkhOkVB4-hoN&_nc_ohc=dbXSK5gpVcMAX95qj4f&_nc_ht=scontent.fsod1-2.fna&oh=00_AfCJB2C584Ex1rMOR3eBAdi46c2MSz2DiFR4nnYqSuEHPQ&oe=643B5647
https://media.licdn.com/dms/image/C4D03AQFMmyoPbgXMyA/profile-displayphoto-shrink_800_800/0/1661129779839?e=1684368000&v=beta&t=eByz0wp3gEGeFRTSQDFIBRLrKmdVblwtYa2vb98-jIg
https://github.com/fstarck.png 
*/