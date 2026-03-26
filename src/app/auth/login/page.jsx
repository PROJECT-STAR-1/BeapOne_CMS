import { Suspense } from "react";
import AuthLayout from "@/components/Layout/AuthLayout";
import LoginLeftPanel from "@/components/Auth/Login/Login-left-panel";
import LoginForm from "@/components/Auth/Login/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout leftPanel={<LoginLeftPanel />}>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}