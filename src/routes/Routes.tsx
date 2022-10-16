import { Route, Routes } from 'react-router-dom'

import { useScrollToTop } from 'hooks/useScrollToTop'
import { Home } from 'pages'
import { E_Routes } from 'utils/constants/routes'

export const AppRoutes = () => {
  useScrollToTop()
  return (
    <Routes>
      <Route path={E_Routes.home} element={<Home />} />
    </Routes>
  )
}
