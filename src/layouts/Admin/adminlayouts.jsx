
import { MenuLateral } from '../../components'


export function AdminLayouts({children}) {
  return (
    <div>
    <MenuLateral/>
      {children}
    </div>
  )
}
