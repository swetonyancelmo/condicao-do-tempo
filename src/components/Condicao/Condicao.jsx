import React, { useState, useEffect } from 'react';
import ClimaImage from '../../assets/clima.png';
import './condicao.css';

export default function Condicao() {
  const [localizacao, setLocalizacao] = useState('');
  const [condicao, setCondicao] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      if (!localizacao) {
        setCondicao(null);
        return;
      }

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=d9b3558166b6c7898e47f5b2f35f966a&lang=pt_br&units=metric`
        );
        const data = await response.json();

        if (response.ok) {
          const infos = {
            temperatura: Math.round(data.main.temp),
            local: data.name,
            icone: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          };
          setCondicao(infos);
        } else {
          setCondicao('Localização não encontrada');
        }
      } catch (error) {
        console.error('Erro ao tentar buscar dados do clima: ', error);
        setCondicao('Erro ao buscar dados.');
      }
    }

    fetchApi();
  }, [localizacao]);

  return (
    <>
      <h1>Condições do Tempo</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
          type="text"
          placeholder="Digite a localização..."
        />
        <button>Pesquisar</button>
      </form>

      <div>
        {condicao && typeof condicao === 'object' ? (
          <div className="condicao-contain">
            <div className="city-contain">
              <span>{condicao.local}</span>
              <span>{condicao.temperatura}°C</span>
            </div>

            <div className="grau-contain">
              <img src={condicao.icone} alt="Ícone do clima" />
            </div>
          </div>
        ) : condicao ? (
          <p>{condicao}</p>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <img style={{ width: '200px' }} src={ClimaImage} />
          </div>
        )}
      </div>
    </>
  );
}
