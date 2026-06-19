import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/context/AuthContext";

export const metadata = {
  title: "Sign in — PostHub",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <LoginForm />
    </div>
  );
}
