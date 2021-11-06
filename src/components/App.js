import React from 'react'
import Layout from './Layout'
import { TabPanel, TabView } from 'primereact/tabview'

import './App.css'
import CartaoCreditoForm from './CartaoCreditoForm'
import LogsLista from './LogsLista'
import CashbackForm from './CashbackForm'
import Caixa from './Caixa'
const App = () => {
    
    const tabs = (
        <TabView className="tabview">
            <TabPanel 
                header="Adquirir cartão"
                rightIcon="pi pi-credit-card">
                <CartaoCreditoForm/>
            </TabPanel>
            <TabPanel 
                header="Solicitar cashback"
                rightIcon="pi pi-plus">
                <CashbackForm/>
            </TabPanel>
            {/* <TabPanel 
                header="Histórico de cashback"
                rightIcon="pi pi-list">
            </TabPanel> */}
            <TabPanel 
                header="Caixa"
                rightIcon="pi pi-dollar">
                <Caixa/>
            </TabPanel>
        </TabView>
    )

    const listaLogs = (
        <LogsLista/>
    )
    return (
        <Layout
            esquerda={tabs}
            direita={listaLogs}
        />

    )
}

export default App