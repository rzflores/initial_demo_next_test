import {  PropsWithChildren } from "react"


export const LayoutWhite  = ( { children } : PropsWithChildren<{}>  ) => {
  return (
    <div style={{
        backgroundColor:'red'        
    }}>
        <h3>LayoutWhite</h3>
        {  children  }

    </div>
  )
}
