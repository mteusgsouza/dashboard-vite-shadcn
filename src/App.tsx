import { Routes, Route, Navigate } from "react-router-dom"
import { DashboardLayout } from "./layouts/dashboard-layout"
import DashboardPage from "./dashboard/page"
import { ThemeProvider } from "./components/theme-provider"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          {/* <Route path="playground" element={<PlaygroundPage />} />
        <Route path="settings" element={<SettingsPage />} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
