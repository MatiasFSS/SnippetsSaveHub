import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { RootState, AppDispatch } from "../store/store";
import { SnippetEditor } from "../components/SnippetEditor";
import {
  startLoadingSnippet,
  startSaveSnippet,
  startDeletingSnippet,
} from "../store/snippets/thunks";
import { activeSnippet } from "../store/snippets/snippetsSlice";
import type { Data } from "../interface/interface";
import { FiBookOpen } from "react-icons/fi";

const technologies = [
  "Todos",
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
  "Ruby",
];

export const SnippetView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { snippet } = useSelector((state: RootState) => state.snippet);

  const [selectedTech, setSelectedTech] = useState("Todos");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSnippet, setSelectedSnippet] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSnippets = async () => {
      await dispatch(startLoadingSnippet());
      setLoading(false);
    };

    if (snippet.length === 0) {
      loadSnippets();
    } else {
      setLoading(false); // por si ya estaban cargados
    }
  }, [dispatch, snippet.length]);

  const filtered =
    selectedTech === "Todos"
      ? snippet
      : snippet.filter((s) => s.tech === selectedTech);

  const openModal = (snip: Data) => {
    setSelectedSnippet(snip);
    dispatch(activeSnippet(snip));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSnippet(null);
    setIsModalOpen(false);
  };

  const handleUpdate = (updated: Data) => {
    setSelectedSnippet(updated);
    dispatch(activeSnippet(updated));
  };

  const handleSave = () => {
    dispatch(startSaveSnippet());
    closeModal();
  };

  const handleDelete = () => {
    dispatch(startDeletingSnippet());
    closeModal();
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center text-white text-xl">
        Cargando snippets...
      </div>
    );
  }

  return (
    <div className="h-full p-6 text-white bg-gradient-to-br from-neutral-800 to-neutral-900">
      <div className="flex flex-col lg:flex-row p-2">
        <div className="w-full animate__animated animate__fadeInLeft">
          <div className="w-full p-4">
            <h1 className="text-xl my-2 text-amber-50 flex items-center gap-2">
              <FiBookOpen />
              Bienvenido a tu biblioteca de Snippets
            </h1>

            <select
              className="p-3 bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded text-white"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              {technologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>

            <h4 className="text-xl my-2 text-gray-500">
              Haz clic en el snippet para poder editar o eliminar
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((snip) => (
                <div
                  key={snip.id}
                  className="bg-neutral-700 p-6 rounded-lg hover:bg-violet-700 transition cursor-pointer"
                  onClick={() => openModal(snip)}
                >
                  <h2 className="text-xl font-semibold">
                    {snip.title || "(Sin título)"}
                  </h2>
                  <p className="text-sm text-gray-400">{snip.tech}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(snip.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm mt-2 text-gray-300 truncate">
                    {snip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedSnippet && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="relative bg-neutral-800 rounded-2xl shadow-2xl w-full max-w-2xl h-[80vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-400 transition z-10"
            >
              ✕
            </button>
            <SnippetEditor
              active={selectedSnippet}
              onUpdate={handleUpdate}
              onSave={handleSave}
              onDelete={handleDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
};
