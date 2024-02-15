import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


//to create contextapi we use the method - createContext()
export const addPhotoResponseContext = createContext()

export const editPhotosResponseContext = createContext()

export const isAuthTokenContext = createContext()

function ContextShare({children}) {
    //children is a predefined props used to share data between all components
    //create data that need to be shared
    const [addPhotoResponse, setAddPhotoResponse] = useState({})

    const [editPhotosResponse,setEditPhotoResponse] = useState({})

    const [isAuthToken, setIsAuthToken] = useState(true)

  return (
    <>
    <addPhotoResponseContext.Provider value={{addPhotoResponse, setAddPhotoResponse}}>
    <editPhotosResponseContext.Provider value={{editPhotosResponse,setEditPhotoResponse}}>
    <isAuthTokenContext.Provider value={{isAuthToken, setIsAuthToken}}>
    {children}
    </isAuthTokenContext.Provider>
    </editPhotosResponseContext.Provider>
    </addPhotoResponseContext.Provider>
    </>
  )
}

export default ContextShare