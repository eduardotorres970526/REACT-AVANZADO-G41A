const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: '¡Backend funcionando!' });
});

// Ruta para Ollama
app.post('/api/ollama/generate', async (req, res) => {
  try {
    const { message, history } = req.body;
    console.log('Recibiendo mensaje:', message);

    const response = await fetch('http://127.0.0.1:11434/api/generate', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-r1:8b',
        prompt: message,
        stream: false,
        context: history?.length > 0 ? history[history.length - 1].context : undefined
      }),
    });

    if (!response.ok) {
      throw new Error(`Error de Ollama: ${response.status}`);
    }

    const data = await response.json();
    
    // 👇 CÓDIGO MEJORADO - EXTRAER SOLO LA RESPUESTA FINAL
    const rawResponse = data.response;
    console.log('Respuesta cruda:', rawResponse);
    
    // Método INFALIBLE: Buscar el último </think> y tomar todo lo que viene después
    let cleanResponse = rawResponse;
    
    const lastThinkEnd = rawResponse.lastIndexOf('</think>');
    if (lastThinkEnd !== -1) {
      // Tomar todo después del último </think>
      cleanResponse = rawResponse.substring(lastThinkEnd + 8).trim(); // +8 para saltar </think>
      
      // Si después de </think> hay más texto, es la respuesta real
      if (cleanResponse) {
        console.log('Respuesta extraída después de </think>:', cleanResponse);
      } else {
        // Si no hay texto después, buscar la última línea que parece respuesta
        const lines = rawResponse.split('\n');
        cleanResponse = lines[lines.length - 1].trim();
      }
    }
    
    // Limpieza adicional por si acaso
    cleanResponse = cleanResponse
      .replace(/<think>[\s\S]*?<\/think>/g, '')  // Remover cualquier think restante
      .replace(/<think>|<\/think>/g, '')         // Remover tags sueltos
      .trim();
    
    // Si está vacío, usar la respuesta completa (como fallback)
    if (!cleanResponse) {
      cleanResponse = rawResponse;
    }
    
    console.log('Respuesta limpia final:', cleanResponse);
    
    res.json({ response: cleanResponse });

  } catch (error) {
    console.error('Error en servidor Express:', error);
    res.status(500).json({ 
      error: error.message || 'Error interno del servidor' 
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express corriendo en http://localhost:${PORT}`);
  console.log(`📋 Ruta de prueba: http://localhost:${PORT}/api/test`);
});