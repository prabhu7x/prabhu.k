import { createContext } from "react";
import JSONdata from '../assets/my-data.json'

const DataContext = createContext()


function DataProvider({ children }){
    const data = {
      data: JSONdata,
    };
    
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
export default DataProvider