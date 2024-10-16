import { Pagina } from "../../components/Pagina";
import { useState } from "react";

export function Tradutor() {
  const [contadorCaracteres, definirContadorCaracteres] = useState(0);
  const [textoEntrada, definirTextoEntrada] = useState("");
  const [resultadoTraducao, definirResultadoTraducao] = useState("");

  async function chamarAPI(texto) {
    const resposta = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        texto
      )}&langpair=pt-br|en-us`
    );
    const dados = await resposta.json();
    return dados.responseData.translatedText;
  }

  async function realizarTraducao() {
    if (textoEntrada.trim() === "") {
      alert("Insira um texto para traduzir.");
      return;
    }
    try {
      const traducaoObtida = await chamarAPI(textoEntrada);
      definirResultadoTraducao(traducaoObtida);
    } catch (erro) {
      console.error("Erro ao tentar traduzir:", erro);
      definirResultadoTraducao("Erro ao realizar a tradução. Tente novamente.");
    }
  }

  return (
    <Pagina titulo="Tradutor" subtitulo="Tradução em React">
      <div className="w-full h-full flex flex-col justify-start items-start p-5 gap-5">

        <h1 className="text-2xl font-bold text-center mb-6">Tradutor</h1>

        <div className="flex w-full h-full gap-4">
          <div className="w-1/3 h-52 relative">

            <label className="block text-gray-700 font-bold mb-2">Português</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md h-44 resize-none text-black pr-20"
              placeholder="Digite o texto aqui..."
              maxLength={249}
              onChange={(evento) => {
                definirTextoEntrada(evento.target.value);
                definirContadorCaracteres(evento.target.value.length + 1);
              }}
            ></textarea>
            <span className="absolute bottom-2 left-2 text-sm text-gray-400">
              {contadorCaracteres}/250
            </span>
            <button
              className="absolute bottom-2 right-2 bg-orange-400 text-white font-bold py-2 px-3 rounded hover:bg-orange-500 focus:outline-none"
              onClick={realizarTraducao}
            >
              Traduzir
            </button>
          </div>

          <div className="w-1/3">
            <label className="block text-gray-700 font-bold mb-2">Inglês</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md h-44 resize-none text-black"
              placeholder="Tradução aparecerá aqui..."
              value={resultadoTraducao}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
