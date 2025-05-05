import React, {  useState } from 'react';
import { LoaderContext } from '../Context/LocaderContext';

const LoaderProvider = ({children}) => {
    const [isLoading , setIsLoading] = useState(true);
   const Loading = {
    isLoading,
    setIsLoading
   }
    return (
        <LoaderContext.Provider value ={Loading}>
            {children}
        </LoaderContext.Provider>
    );
};

export default LoaderProvider;