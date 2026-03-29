import { Routes, Route, Navigate } from "react-router-dom"
import { DashboardLayout } from "./layouts/dashboard-layout"
import DashboardPage from "./pages/dashboard/page"
import { ThemeProvider } from "./components/theme-provider"
import { AuthLayout } from "./layouts/auth-layout"
import { ForgetPasswordForm } from "./components/forget-password-form"
import { NewPasswordForm } from "./components/new-password-form"
import { SignupForm } from "./components/siginup-form"
import { LoginForm } from "./components/login-form"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Navigate to="/auth/signin" replace />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="new-password" element={<NewPasswordForm />} />
          <Route path="forget-password" element={<ForgetPasswordForm />} />
        </Route>
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
