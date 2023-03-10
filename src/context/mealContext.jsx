import { createContext, useState } from "react";

export const MealContext = createContext()




const MealProvider = ({children}) =>{

    const [totalData, setTotalData] = useState([])

    return(
        <MealContext.Provider value={[
            totalData,
            setTotalData
        
        ]}>,
            {children}
        </MealContext.Provider>
        )

}





export default MealProvider;