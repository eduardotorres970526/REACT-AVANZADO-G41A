import { useState } from 'react';

function useOllamaHook() {
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (prompt) => {
    console.log('Enviando prompt a Ollama:', prompt);
    setLoading(true);
    setResponse('');
    setError(null);

    try {
      // Usamos tu backend Express en lugar de conectar directo a Ollama
      const res = await fetch('http://localhost:5000/api/ollama/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: prompt,
          history: [] // Puedes enviar historial si lo tienes
        }),
      });

      if (!res.ok) {
        throw new Error(`Error del servidor: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.response);
      
    } catch (err) {
      console.error('Error en useOllamaHook:', err);
      setError(err.message || 'Error al conectar con Ollama');
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, response, error, loading };
}

export default useOllamaHook;