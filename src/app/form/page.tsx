'use client'
import { useState, ChangeEvent, FormEvent } from 'react'

type FormDataType = {
  fullName: string
  email: string
  message: string
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormDataType>({
    fullName: '',
    email: '',
    message: '',
  })
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const formData = new FormData()
    formData.append('fullName', formState.fullName)
    formData.append('email', formState.email)
    formData.append('message', formState.message)

    // Honeypot field to catch bots (invisible to users)
    formData.append('_gotcha', '')

    try {
      const res = await fetch('https://formspree.io/f/mjkwavvd', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (res.ok) {
        setIsSent(true)
        setFormState({ fullName: '', email: '', message: '' })
      } else {
        const data = await res.json()
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.log(err)
      setError('Network error. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSent && <p className="text-green-600">Message sent!</p>}
      {error && <p className="text-red-600">{error}</p>}

      <input
        type="text"
        name="fullName"
        placeholder="Your name"
        value={formState.fullName}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formState.email}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={formState.message}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 disabled:opacity-50">
        Send
      </button>
    </form>
  )
}
