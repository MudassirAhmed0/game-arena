import useData from "./useData";


export interface Genre {
    id: number;
    name: string;
    image_background:"",
  }
  
 
  
const useGenres = () => useData<Genre>('/genres')

export default useGenres