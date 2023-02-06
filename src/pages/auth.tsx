import { LayoutMain } from '../components/layouts/LayoutMain'
import { LayoutWhite } from '../components/layouts/LayoutWhite'

export default function Auth(){
    return (
        <> 
            <div className={'grid'}>
              <h2 className={'card'}>
              Login 
              </h2>
          </div>            
        </>       
    )
}


Auth.getLayout = function getLayout ( page : JSX.Element )  {
    return (
    <LayoutMain> 
        <LayoutWhite>
            { page }
        </LayoutWhite>
    </LayoutMain>       
    )
}