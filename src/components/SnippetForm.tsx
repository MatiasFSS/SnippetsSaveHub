import { useState, type FormEvent } from 'react'

interface SnippetFormProps {
  onSubmit: (data: { title: string; tech: string; code: string }) => void
}

export const SnippetForm = ({ onSubmit }: SnippetFormProps) => {
  const [form, setForm] = useState({
    title: '',
    tech: '',
    code: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(form)
    setForm({ title: '', tech: '', code: '' }) // limpiar formulario
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        className="p-2 rounded bg-neutral-800 text-white"
        required
      />
      <input
        type="text"
        name="tech"
        placeholder="Tecnología"
        value={form.tech}
        onChange={handleChange}
        className="p-2 rounded bg-neutral-800 text-white"
        required
      />
      <textarea
        name="code"
        placeholder="Código"
        value={form.code}
        onChange={handleChange}
        className="p-2 rounded bg-neutral-800 text-white h-32"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded"
      >
        Guardar Snippet
      </button>
    </form>
  )
}