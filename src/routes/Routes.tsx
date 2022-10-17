import { Navigate, Route, Routes } from 'react-router-dom'

import { useScrollToTop } from 'hooks/useScrollToTop'
import { Home, Tickets } from 'pages'
import { E_Routes } from 'utils/constants/routes'

export const AppRoutes = () => {
  useScrollToTop()
  return (
    <Routes>
      <Route path={E_Routes.start} element={<Navigate to={E_Routes.home} />} />
      <Route path={E_Routes.home} element={<Home />} />
      <Route path={E_Routes.tickets} element={<Tickets />} />
    </Routes>
  )
}
