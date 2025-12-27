import { DivBox, DivFlex } from '../ui/boxes/boxes'
import './layout.css'
import { TopBar } from './topbar'

export function Layout({ children }) {

    return (
        <DivFlex>
            <TopBar />
            <DivFlex direction='flex-row'>
                <DivBox long={'10%'}>
                    <h1>Left aside</h1>
                </DivBox>
                <DivBox long={'80%'}>
                    {children}
                </DivBox>
                <DivBox long={'10%'}>
                    <h1>righ aside</h1>
                </DivBox>
            </DivFlex>
        </DivFlex>
    )
}