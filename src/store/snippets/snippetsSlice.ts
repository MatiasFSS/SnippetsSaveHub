import { createSlice } from "@reduxjs/toolkit";
import type { Data } from "../../interface/interface";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SnippetState {
    id?: string | null,
    isSaving: boolean,
    messageSaved: string,
    snippet: Data[],
    active: Data | null,

}

const initialState: SnippetState = {
    id: null,
    isSaving: false,
    messageSaved: "",
    snippet: [],
    active: null
}

const snippetSlice = createSlice({
    name: "snippet",
    initialState,
    reducers : {
        savingSnippet: (state) => {
            state.isSaving = true
        },
        addNewSnippet: (state, { payload }: PayloadAction<Data>) => {
            state.snippet.push(payload)
            state.isSaving = true
        },
        activeSnippet: (state, { payload }: PayloadAction<Data>) => {
            state.active = payload
            state.messageSaved = ''
        },
        setSnippet: (state, { payload }: PayloadAction<Data[]>) => {
            state.snippet = payload
        },
        setSaving: (state) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        updateSnippet: (state, { payload }: PayloadAction<Data>) => {
            state.isSaving = false,
            state.snippet = state.snippet.map(snippet =>
                snippet.id === payload.id ? payload : snippet
            );
            state.messageSaved = `${payload.title}, actualizada correctamente`;
        },
        clearSnippetAuth:(state) => {
            state.isSaving = false
            state.messageSaved = ""
            state.snippet = []
            state.active = null
        },
        deleteSnippet: (state , { payload }: PayloadAction<string>) => {
            state.active = null
            state.snippet = state.snippet.filter(snippet => snippet.id !== payload)
        }
    }
})

export const {savingSnippet, addNewSnippet, activeSnippet, setSaving, setSnippet, updateSnippet, clearSnippetAuth, deleteSnippet} = snippetSlice.actions
export default snippetSlice.reducer