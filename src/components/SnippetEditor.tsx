import type { Data } from "../interface/interface";
import MonacoEditor from "@monaco-editor/react";

interface Props {
  active: Data;
  onUpdate: (data: Data) => void;
  onSave: () => void;
  onDelete: () => void;
}

const technologies = [
  "JavaScript",
  "TypeScript",
  "JSON",
  "CSS",
  "HTML",
  "XML",
  "Markdown",
  "SQL",
  "C#",
  "C++",
  "Java",
  "Python",
  "PHP",
  "PowerShell",
  "Ruby",
  "Shell",
];

export const SnippetEditor = ({ active, onSave, onDelete, onUpdate }: Props) => {
  return (
    <div className="w-full h-full">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-xl p-6 flex flex-col gap-4 h-full">

        <input
          type="text"
          value={active.title}
          onChange={(e) => onUpdate({ ...active, title: e.target.value })}
          placeholder="Título"
          className="text-xl font-bold p-3 rounded bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
        />

        <select
          value={active.tech}
          onChange={(e) => onUpdate({ ...active, tech: e.target.value })}
          className="p-3 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
        >
          <option value="" className="bg-neutral-800 text-gray-400">Selecciona una tecnología</option>
          {technologies.map((tech) => (
            <option key={tech} value={tech} className="bg-neutral-800 text-white">
              {tech}
            </option>
          ))}
        </select>

        <textarea
          value={active.desc}
          onChange={(e) => onUpdate({ ...active, desc: e.target.value })}
          placeholder="Descripción"
          className="font-medium text-white p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition resize-none"
        />

        <div className="flex-grow overflow-hidden rounded-lg border border-neutral-700">
          <MonacoEditor
            height="450px"
            defaultLanguage="javascript"
            value={active.code}
            onChange={(value) => onUpdate({ ...active, code: value || "" })}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              automaticLayout: true,
            }}
          />
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-end">
          <button
            onClick={onSave}
            className="w-full sm:w-auto bg-violet-500 hover:bg-violet-600 active:bg-violet-700 transition px-6 py-3 rounded-lg text-white font-semibold"
          >
            Guardar
          </button>
          <button
            onClick={onDelete}
            className="w-full sm:w-auto bg-transparent border border-violet-500 hover:bg-violet-600 transition px-6 py-3 rounded-lg text-white font-semibold"
          >
            Eliminar
          </button>
        </div>

      </div>
    </div>
  );
};
