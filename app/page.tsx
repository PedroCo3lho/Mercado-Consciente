"use client";

import { useState } from "react";
import Image from "next/image";
import { usePessoas } from "./Providers/contextProvider";
import { useRouter } from "next/navigation";

export default function Home() {
  const { setNumeroDePessoas } = usePessoas();
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleCalcular = () => {
    const numero = parseInt(inputValue, 10);
    if (!isNaN(numero)) {
      setNumeroDePessoas(numero);
      router.push("/produto");
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleCalcular(); // Chama a função de cálculo ao pressionar Enter
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <main className="text-center">
        {/* Título do aplicativo */}
        <h1 className="text-2xl font-bold mb-4">Evite o Desperdício de Alimentos</h1>

        {/* Introdução com ícones ou imagens */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://imgs.search.brave.com/Rr_O1v3cG-mqneSmVm9xOi0hqEpv72vSFyekV4FKcd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVz/dXJ2aXZhbG1vbS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDQvMS5qcGc" // Altere para o caminho da sua imagem ou ícone
            alt="Economia de alimentos"
            width={150}
            height={150}
            className="mb-4"
          />
          <p className="text-lg">
            Nosso aplicativo ajuda a evitar o desperdício de alimentos ao calcular a quantidade exata recomendada para cada número de pessoas. Basta inserir o número de pessoas e obter a lista personalizada de produtos.
          </p>
        </div>

        {/* Input e botão para calcular */}
        <div className="w-full max-w-xs mx-auto">
          <input
            type="number"
            placeholder="Número de pessoas"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown} // Substitui onKeyPress por onKeyDown
            className="input input-bordered w-full mb-4 text-center"
          />
          <button
            className="btn btn-primary w-full"
            onClick={handleCalcular}
          >
            Calcular
          </button>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="footer footer-center text-gray-500 mt-8">
        <div>
          <p>Villa Lobos © 2024 - 3º ano A</p>
          <p>Benício - Gael - Júlia de Moraes - Luis Guilherme - Rafael - Rebeca</p>
        </div>
      </footer>
    </div>
  );
}
