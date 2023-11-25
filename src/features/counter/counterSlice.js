import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchVisitors = createAsyncThunk('fetchVisitors', async(values, thunkAPI) => {
    await fetch('http://localhost:5000/visitor').then((res) => res.json()).then((data) => {return data}).catch((error) => {
        return thunkAPI.rejectWithValue(error.value);
    });
    // .then((res) => {
    //     if(!res.ok){
    //         console.log('not working');
    //     }else{
    //         console.log(res.json())
    //         const response = res.json();
    //         return response
    //     }
    // })
});

export const incrementVisitor = createAsyncThunk('incrementVisitor', async(values, thunkAPI) => {
    await fetch('http://localhost:5000/visitor', {
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({value:values})
    })
    .then((res) => res.json())
    .then((data) => {return data})
    .catch((error) => {
        return thunkAPI.rejectWithValue(error.message);
    })
})

const counterSlice = createSlice({
    name: 'visitor-counter',
    initialState: {
        value: 0,
    },
    
    reducers:{
        increment:(state, action) => {
            state.value = action.payload + 1;
        },
        getVisitors: (state,action) => {
            state.value = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchVisitors.fulfilled,(state,action) => {
            state.value = action.payload;
        })
        .addCase(incrementVisitor.fulfilled, (state,action) => {
            state.value = action.payload + 1;
        })
    }
    
})
export const { increment, getVisitors } = counterSlice.actions;
export default counterSlice.reducer