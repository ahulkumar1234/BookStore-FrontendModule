import AuthForm from "../components/AuthForm";

export default function AuthPage({ onLoginSuccess }) {
  return <AuthForm onLoginSuccess={onLoginSuccess} />;
}
