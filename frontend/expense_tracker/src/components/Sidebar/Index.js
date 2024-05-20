import React, { children } from 'react'


const Index = ({onClick, children}) => {
  return (
    <div style={{height:"100vh", width:"20%", border:"1.5px solid brown",zIndex:"99999", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",background:" rgb(214, 201, 196)" ,position:"absolute", top:"0", right:`${onClick ? 0:-500}`, transition:"all 0.5s ease-in"}}>
       {children}
    </div>
  )
}

export default Index
