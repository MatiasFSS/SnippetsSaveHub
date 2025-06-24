// Dashboard.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingSnippet, startSaveSnippet, startDeletingSnippet, newSnippet } from "../store/snippets/thunks";
import { activeSnippet } from "../store/snippets/snippetsSlice";
import type{ RootState, AppDispatch } from "../store/store";
import type { Data } from "../interface/interface";
import { SnippetEditor } from "../components/SnippetEditor";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { snippet: snippets, active } = useSelector((state: RootState) => state.snippet);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(startLoadingSnippet());
  }, []);

  const handleSelectSnippet = (snip: Data) => dispatch(activeSnippet(snip));
  const handleSave = () => dispatch(startSaveSnippet());
  const handleNew = () => dispatch(newSnippet());
  const handleDelete = () => dispatch(startDeletingSnippet());
  const handleUpdate = (snip: Data) => dispatch(activeSnippet(snip));

  const sortedSnippets = [...snippets]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8);

  return (
    <div className="h-full text-white p-4 bg-gradient-to-br from-neutral-800 to-neutral-900">
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
            {sortedSnippets.map((snip, index) => {
              const isHiddenOnSmall = index >= 4 ? 'hidden sm:block' : '';
              const isHiddenOnLarge = index >= 8 ? 'hidden lg:block' : '';
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
                    ${isHiddenOnSmall} ${isHiddenOnLarge}
                  `}
                >
                  <h3 className="font-bold text-lg truncate">
                    {snip.title || "(Sin título)"}
                  </h3>
                  <p className="text-sm text-gray-300 truncate">{`Descripción: ${snip.desc}`}</p>
                  <p className="text-sm text-gray-300 truncate font-semibold">{snip.tech}</p>
                  <p className="text-xs text-gray-400 mb-1">
                    {new Date(snip.date).toLocaleDateString()}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center my-4">
            <button
              className="text-violet-400 hover:underline"
              onClick={() => navigate("/snippets")}
            >
              Ver todos los snippets →
            </button>
          </div>
        </div>
        
        {active ? (
          <div className="w-full lg:w-1/2">
            <SnippetEditor
              active={active}
              onSave={handleSave}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center flex-grow text-gray-500 text-xl">
            Selecciona o crea un snippet
          </div>
        )}
      </div>
    </div>
  );
};
