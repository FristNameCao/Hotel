import { definePinia } from "pinia";
const useSearch = definePinia({
  //这里相当于是data()
  state:()=>({
    search:[]
  }),
  //这里相当于methods
 action:{
    
 }
})

export default useSearch
