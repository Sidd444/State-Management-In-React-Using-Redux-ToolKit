import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arr: [],
  total: 0
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setArr: (state, action) => {
      const shoe=action.payload
      let exists=false;
      for(let a of state.arr){
        if(a.name===shoe.name){
          exists=true;
          a.q+=1;
          state.total+=a.price;
        }
      }
      if(!exists) state.arr.push(shoe);
    },
    setTotal: (state, action) => {
      let price= action.payload;
      state.total+=price;
    }, removeShoe: (state, action)=>{
      const shoe=action.payload;
      state.arr.filter(obj => obj !== shoe);
    },
    increaseShoeQuantity: (state,action)=>{
      const shoe=action.payload;
      for(let a of state.arr){
        if(a.name===shoe.name){
          a.q+=1;
          state.total+=a.price;
        } 
      }
    },
    decreaseShoeQuantity: (state,action)=>{
      const shoe=action.payload;
      for (let i = 0; i < state.arr.length; i++) {
        if (state.arr[i].name === shoe.name) {
          state.arr[i].q -= 1;
          state.total -= state.arr[i].price;
          if (state.arr[i].q === 0) {
            state.arr.splice(i, 1); 
          }
          if (state.total === 0) {
            state.arr = []; 
          }
          break;
        }
      }
    },
    emptyArr: (state,action)=>{
      state.arr=[];
    },
    emptyTotal:(state,action)=>{
      state.total=0;
    }
  }
});

export const { setArr, setTotal, removeShoe,increaseShoeQuantity, decreaseShoeQuantity, emptyArr, emptyTotal } = globalSlice.actions;


export default globalSlice.reducer;
