import { useState, useEffect } from 'react';
import './App.css';
import useOllamaHook from './api/useOllamaHooks';

function App() {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const { handleSubmit, response, loading, error } = useOllamaHook()

  // Efecto para agregar respuestas de Ollama al chat
  useEffect(() => {
    if (response) {
      setMessages(prev => [...prev, { text: response, sender: 'bot' }])
    }
  }, [response])

  // Efecto para mostrar errores
  useEffect(() => {
    if (error) {
      setMessages(prev => [...prev, { text: `Error: ${error}`, sender: 'error' }])
    }
  }, [error])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Agregar mensaje del usuario
    const userMessage = { text: inputMessage, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Llamar a Ollama - ¡ESTA ES LA PARTE IMPORTANTE!
    await handleSubmit(inputMessage)
  }

  return (
    <div className="app-container">
      <h1>Chat con Ollama</h1>
      
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="message bot loading">
            Pensando...
          </div>
        )}
      </div>

      <form onSubmit={handleFormSubmit} className="chat-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}
    </div>
  )
}

export default App