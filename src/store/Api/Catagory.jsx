import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:null,
  loading: false,
  error: null
}
export const fetchCatagory =createAsyncThunk('fetchCatagory',async()=>{
  const response = await fetch('http://localhost:5002/api/v1')
  const data = await response.json()
  return data
})
export const fetchCatagorySlice = createSlice({
  name: 'catagory',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCatagory.pending, (state) => {
      state.loading = true
      state.data = null
      state.error = null
    })
    builder.addCase(fetchCatagory.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    })
    builder.addCase(fetchCatagory.rejected, (state, action) => {
      state.error = action.error.message
      state.loading = false
      state.data = null
    })
      
  },
})

export default fetchCatagorySlice.reducer