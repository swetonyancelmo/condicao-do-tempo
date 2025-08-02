import './condicao.css';

export default function Condicao(){
  return (
    <>
      <h1>Condições do Tempo</h1>

      <form>
        <input 
          type="text"
          placeholder="Digite a localização..."
        />
        <button>Pesquisar</button>
      </form>
      <div className='condicao-contain'>
        <div className='city-contain'>
          <span>Limoeiro</span>
          <span>45 Graus</span>
        </div>

        <div className='grau-contain'>
          <img src="" />
        </div>
      </div>
    </>
  )
}

// #1A1F30
// #222845
// #8F5CFF
// #181C2A
// #AA72FF