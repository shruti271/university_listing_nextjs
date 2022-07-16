import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  FILTER_MAX_BODY_SIZE,
  FILTER_MIN_BODY_SIZE,
  FILTER_RANK_ORDER_MAX,
  FILTER_RANK_ORDER_MIN,
} from '../../data/constants';

let searchQuery = '';
let insitituteType = '';
let location = '';
let offset = '';
let rankOrder = '';
let rankOrderGT = '';
let rankOrderLT = '';
let rankOrderGTE = FILTER_RANK_ORDER_MIN;
let rankOrderLTE = FILTER_RANK_ORDER_MAX;
let studentBodySize = '';
let studentBodySizeLT = '';
let studentBodySizeGT = '';
let studentBodySizeGTE = FILTER_MIN_BODY_SIZE;
let studentBodySizeLTE = FILTER_MAX_BODY_SIZE;
let pageOffset = 0;

async function fetchFromApi() {
  const res = await fetch(setCurrentFilter());
  const data = await res.json();
  return { results: data.results, count: data.count };
}

const resetConstants = () => {
  searchQuery = '';
  insitituteType = '';
  location = '';
  offset = '';
  rankOrder = '';
  rankOrderGT = '';
  rankOrderLT = '';
  rankOrderGTE = FILTER_RANK_ORDER_MIN;
  rankOrderLTE = FILTER_RANK_ORDER_MAX;
  studentBodySize = '';
  studentBodySizeLT = '';
  studentBodySizeGT = '';
  studentBodySizeGTE = FILTER_MIN_BODY_SIZE;
  studentBodySizeLTE = FILTER_MAX_BODY_SIZE;
  pageOffset = 0;
};

const initialState = {
  universities: [],
  filteredUniversities: [],
  countUniversities: 0,
  pending: false,
  error: false,
};

const setCurrentFilter = () => {
  const currentFilter = `http://api.composite.digital/v1/universities/filter/?institute_type=&location=${location}&offset=${pageOffset}&rank_order=&rank_order__gt=&rank_order__gte=${rankOrderGTE}&rank_order__lt=&rank_order__lte=${rankOrderLTE}&student_body_size=&student_body_size__gt=&student_body_size__gte=${studentBodySizeGTE}&student_body_size__lt=&student_body_size__lte=${
    studentBodySizeLTE < FILTER_MAX_BODY_SIZE ? studentBodySizeLTE : ''
  }&search=${searchQuery}`;

  return currentFilter;
};

export const getUniversities = createAsyncThunk(
  'universities/getUniversities',
  async () => {
    return await fetchFromApi();
  }
);

export const resetFilter = createAsyncThunk(
  'universities/resetFilter',
  async () => {
    resetConstants();
    return await fetchFromApi();
  }
);

export const filterMainSearch = createAsyncThunk(
  'universities/filterMainSearch',
  async (query) => {
    searchQuery = query;
    return await fetchFromApi();
  }
);

export const filterByNameAndLocation = createAsyncThunk(
  'universities/filterByNameAndLocation',
  async (searchValue) => {
    location = searchValue;
    return await fetchFromApi();
  }
);

export const filterByStudentBodySize = createAsyncThunk(
  'universities/filterByStudentBodySize',
  async (searchValue) => {
    const [min, max] = searchValue;
    studentBodySizeGTE = min;
    studentBodySizeLTE = max;
    return await fetchFromApi();
  }
);

export const filterByRankOrder = createAsyncThunk(
  'universities/filterByRankOrder',
  async (searchValue) => {
    const [min, max] = searchValue;
    rankOrderGTE = min;
    rankOrderLTE = max;
    return await fetchFromApi();
  }
);

export const setNewPage = createAsyncThunk(
  'universities/setNewPage',
  async (page) => {
    pageOffset = (page - 1) * 20;
    return await fetchFromApi();
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
      })
      .addCase(filterByStudentBodySize.pending, (state) => {
        state.pending = true;
      })
      .addCase(filterByStudentBodySize.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.universities = payload.results;
        state.filteredUniversities = payload.results;
        state.countUniversities = payload.count;
      })
      .addCase(filterByStudentBodySize.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(setNewPage.pending, (state) => {
        state.pending = true;
      })
      .addCase(setNewPage.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.universities = payload.results;
        state.filteredUniversities = payload.results;
        state.countUniversities = payload.count;
      })
      .addCase(setNewPage.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(filterMainSearch.pending, (state) => {
        state.pending = true;
      })
      .addCase(filterMainSearch.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.universities = payload.results;
        state.filteredUniversities = payload.results;
        state.countUniversities = payload.count;
      })
      .addCase(filterMainSearch.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(resetFilter.pending, (state) => {
        state.pending = true;
      })
      .addCase(resetFilter.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.universities = payload.results;
        state.filteredUniversities = payload.results;
        state.countUniversities = payload.count;
      })
      .addCase(resetFilter.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(filterByRankOrder.pending, (state) => {
        state.pending = true;
      })
      .addCase(filterByRankOrder.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.universities = payload.results;
        state.filteredUniversities = payload.results;
        state.countUniversities = payload.count;
      })
      .addCase(filterByRankOrder.rejected, (state) => {
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
