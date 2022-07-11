import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { universities } from '../../components/university-sections/universities-section/universityData';

const initialState = {
  universities: [],
  filteredUniversities: [],
  pending: false,
  error: false,
};

export const getUniversities = createAsyncThunk(
  'universities/getUniversities',
  async () => {
    const res = await fetch(
      'http://api.composite.digital/v1/universities/?format=json'
    );
    const data = await res.json();
    return data.results;
  }
);

export const filterByNameAndLocation = createAsyncThunk(
  'universities/filterByNameAndLocation',
  async (searchValue) => {
    const res = await fetch(
      `https://api.composite.digital/v1/universities/filter/?format=json&search=${searchValue}`
    );
    const data = await res.json();
    return data.results;
  }
);

export const universitySlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      state.universities = action.payload.universities;
      state.filteredUniversities = action.payload.filteredUniversities;
      state.pending = action.payload.pending;
      state.error = action.payload.error;
    },
    filterUniversitiesByLocation: (state, action) => {
      state.filteredUniversities = state.universities.filter((uni) =>
        uni.location.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterUniversitiesByType: (state, action) => {
      state.filteredUniversities = state.universities.filter((uni) =>
        uni.type.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUniversities.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUniversities.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.universities = payload;
        state.filteredUniversities = payload;
      })
      .addCase(getUniversities.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(filterByNameAndLocation.pending, (state) => {
        state.pending = true;
      })
      .addCase(filterByNameAndLocation.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.universities = payload;
        state.filteredUniversities = payload;
      })
      .addCase(filterByNameAndLocation.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const {
  rehydrate,
  filterUniversitiesByLocation,
  filterUniversitiesByType,
} = universitySlice.actions;

export default universitySlice.reducer;
