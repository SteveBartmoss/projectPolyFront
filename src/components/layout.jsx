import { DivBox, DivFlex } from '../ui/boxes/boxes'
import './layout.css'
import { TopBar } from './topbar'

export function Layout({ children }) {

    return (
        <DivFlex>
            <TopBar />
            <DivFlex direction='flex-row'>
                <DivBox long={'100%'}>
                    {children}
                </DivBox>
            </DivFlex>
        </DivFlex>
    )
}