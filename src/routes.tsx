import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProdutoDetalhe } from './pages/ProdutoDetalhe'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { MeuPerfil } from './pages/MeuPerfil'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { CarrinhoPage } from './pages/CarrinhoPage'

import { Produtos } from './pages/Produtos'
import { PortalInterno } from './pages/PortalInterno'

import { AppLayout } from './pages/AppLayout'
import { Admin } from './pages/Admin'
import { Estoque } from './pages/Estoque'
import { Compras } from './pages/Compras'
import { VendasClientes } from './pages/VendasClientes'
import { GestaoArquivos } from './pages/GestaoArquivos'
import { Perfil } from './pages/Perfil'
import { Configuracoes } from './pages/Configuracoes'
import { EstoqueParametrizacoes } from './pages/EstoqueParametrizacoes'
import { MeusOrcamentos } from './pages/MeusOrcamentos'
import { OrcamentoDetalhe } from './pages/OrcamentoDetalhe'


export const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route
            path="/meus-orcamentos"
            element={
              <ProtectedRoute allowCliente>
                <MeusOrcamentos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meus-orcamentos/:id"
            element={
              <ProtectedRoute allowCliente>
                <OrcamentoDetalhe />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meu-perfil"
            element={
              <ProtectedRoute allowCliente>
                <MeuPerfil />
              </ProtectedRoute>
            }
          />

          {/* Rotas protegidas */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="portal-interno" element={<PortalInterno />} />
            <Route path="admin" element={<Admin />} />
            <Route path="estoque" element={<Estoque />} />
            <Route path="estoque/parametrizacoes" element={<EstoqueParametrizacoes />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="compras" element={<Compras />} />
            <Route path="vendas-clientes" element={<VendasClientes />} />
            <Route path="gestao-arquivos" element={<GestaoArquivos />} />
            <Route path="perfil" element={<Perfil />} />
            <Route path="configuracoes" element={<Configuracoes />} />
            <Route path="produtos" element={<Produtos />} />
          </Route>


          {/* Redirecionar qualquer rota não encontrada para login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}
