import { DivFlex } from '../ui/boxes/boxes'
import './layout.css'
import { TopBar } from './topbar'

export function Layout({ children }) {

    return (
        <DivFlex>
            <TopBar />
            <div>
                <div>
                    <h1>Left aside</h1>
                </div>
                <div>
                    {children}
                </div>
                <div>
                    <h1>righ aside</h1>
                </div>
            </div>
        </DivFlex>
    )
}