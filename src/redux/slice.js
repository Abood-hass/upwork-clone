import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../api/API";

export const dataSlicer = createSlice({
    name: "data",
    initialState: {
        jobs: [],
        profileData: {},
        isLoading: false,
        error: {}
    },
    reducers: {
        getAllJobs: (state, action) => {
            state.jobs = action.payload
        },
        isLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = { message: action.payload }
        },
    }
})

const { getAllJobs, isLoading, setError } = dataSlicer.actions

export const getAllDataAPI = () => async (dispatch) => {
    dispatch(isLoading(true))
    try {
        const { data } = await axios.get(`${API_URL}jobs`)
        dispatch(getAllJobs(data))
    } catch (error) {
        setError("Somthing went wrong")
    } finally {
        dispatch(isLoading(false))
    }
}

export default dataSlicer.reducer