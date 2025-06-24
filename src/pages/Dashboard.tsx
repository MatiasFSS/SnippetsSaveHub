// Dashboard.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingSnippet, startSaveSnippet, startDeletingSnippet, newSnippet } from "../store/snippets/thunks";
import { activeSnippet } from "../store/snippets/snippetsSlice";
import type{ RootState, AppDispatch } from "../store/store";
import MonacoEditor from "@monaco-editor/react";
import type { Data } from "../interface/interface";

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { snippet: snippets, active } = useSelector((state: RootState) => state.snippet);

  useEffect(() => {
    dispatch(startLoadingSnippet());
  }, []);

  const handleSelectSnippet = (snip: Data) => {
    dispatch(activeSnippet(snip));
  };

  const handleSave = () => {
    dispatch(startSaveSnippet());
  };

  const handleNew = () => {
    dispatch(newSnippet());
  };

  const handleDelete = () => {
    dispatch(startDeletingSnippet());
  };

  return (

    <div className="h-full text-white p-4">
      <div className="flex flex-col lg:flex-row p-2">
        <div className="w-full lg:w-1/2">
          <div className="w-full p-4">
            <h1 className="text-xl my-2">¿Quieres crear un nuevo snippet?</h1>
            <button
              onClick={handleNew}
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white py-2 px-2 rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              + Nuevo Snippet
            </button>

          <h4 className="text-xl my-2 text-gray-500">
            Haz click en el snippet para poder editar o eliminar
          </h4>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
            {snippets.map((snip, index) => {
              const hiddenOnLg = index >= 8 ? 'hidden lg:block' : '';
              const hiddenOnSm = index >= 4 ? 'hidden sm:block' : '';

              return (
                <div
                  key={snip.id}
                  onClick={() => handleSelectSnippet(snip)}
                  className={`p-6 rounded-lg cursor-pointer transition 
                    ${
                      active?.id === snip.id
                        ? "bg-violet-500 shadow-lg"
                        : "bg-neutral-700 hover:bg-violet-600"
                    }
                    ${hiddenOnLg} ${hiddenOnSm}
                  `}
                >
                  <h3 className="font-semibold text-lg truncate">
                    {snip.title || "(Sin título)"}
                  </h3>
                  <p className="text-xs text-gray-400 mb-1">
                    {new Date(snip.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-300 truncate">{snip.tech}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center my-4">
            <button
              className="text-violet-400 hover:underline"
              onClick={() => console.log("Ir a todos los snippets")}
            >
              Ver todos los snippets →
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col h-full min-h-[60vh]">
          {active ? (
            <>
              <input
                type="text"
                value={active.title}
                onChange={(e) =>
                  dispatch(activeSnippet({ ...active, title: e.target.value }))
                }
                placeholder="Título"
                className="mb-3 text-2xl font-bold p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                value={active.tech}
                onChange={(e) =>
                  dispatch(activeSnippet({ ...active, tech: e.target.value }))
                }
                placeholder="Tecnología"
                className="mb-4 p-2 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex-grow rounded overflow-hidden shadow-lg">
                <MonacoEditor
                  height="500px"
                  defaultLanguage="javascript"
                  value={active.code}
                  onChange={(value) =>
                    dispatch(activeSnippet({ ...active, code: value || "" }))
                  }
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: "on",
                    automaticLayout: true,
                  }}
                />
              </div>

              <div className="mt-3 flex gap-4 justify-end">
                <button
                  onClick={handleSave}
                  className="w-full sm:w-auto bg-violet-500 hover:bg-violet-600 active:bg-violet-700 transition px-6 py-3 rounded-lg text-white font-semibold"
                >
                  Guardar
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full sm:w-auto bg-transparent border border-violet-500 hover:bg-violet-600 transition px-6 py-2 rounded-lg text-white font-semibold"
                >
                  Eliminar
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center flex-grow text-gray-500 text-xl">
              Selecciona o crea un snippet
            </div>
          )}
        </div>
      </div>
  </div>

   

  );
};
