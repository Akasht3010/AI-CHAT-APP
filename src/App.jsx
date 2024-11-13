import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  async function generateAnswer() {
    setAnswer("Generating Answer")
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCNtlKtZATOLhdr7xvEauPSSsnEikai1pU",
      method: "POST",
      data: {
        "contents": [
          {
            "parts": [
              {
                "text": question
              }
            ]
          }
        ]
      }
    })
    setAnswer(response.data.candidates[0].content.parts[0].text)
  }

  return (
    <>
      <h1 className='bg-blue-300 text-center'>AI Chat Bot</h1>
      <textarea
        className='border rounded w-full p-2 resize-none'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder='Enter your question here'
      ></textarea>
      <button className="bg-blue-500 text-white rounded px-4 py-2 mt-2" onClick={generateAnswer}>Generate Answer</button>
      <pre className="output">{answer}</pre>
    </>
  )
}

export default App
