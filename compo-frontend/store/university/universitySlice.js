import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { universities } from '../../components/university-sections/universities-section/universityData';

let insitituteType = '';
let location = '';
let offset = '';
let rankOrder = '';
let rankOrderGT = '';
let rankOrderLT = '';
let rankOrderGTE = '';
let rankOrderLTE = '';
let studentBodySize = '';
let studentBodySizeLT = '';
let studentBodySizeGT = '';
let studentBodySizeGTE = '';
let studentBodySizeLTE = '';

const initialState = {
  universities: [],
  filteredUniversities: [],
  countUniversities: 0,
  pending: false,
  error: false,
};

const setCurrentFilter = () => {
  const currentFilter = `http://api.composite.digital/v1/universities/filter/?institute_type=&location=${location}&offset=&rank_order=&rank_order__gt=&rank_order__gte=&rank_order__lt=&rank_order__lte=&student_body_size=&student_body_size__gt=&student_body_size__gte=&student_body_size__lt=&student_body_size__lte=`;

  return currentFilter;
};

export const getUniversities = createAsyncThunk(
  'universities/getUniversities',
  async () => {
    const res = await fetch(setCurrentFilter());
    const data = await res.json();
    return { results: data.results, count: data.count };
  }
);

export const filterByNameAndLocation = createAsyncThunk(
  'universities/filterByNameAndLocation',
  async (searchValue) => {
    location = searchValue;
    const res = await fetch(setCurrentFilter());
    const data = await res.json();
    return { results: data.results, count: data.count };
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
        state.universities = payload.results;
        state.filteredUniversities = payload.results;
        state.countUniversities = payload.count;
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
        state.universities = payload.results;
        state.filteredUniversities = payload.results;
        state.countUniversities = payload.count;
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