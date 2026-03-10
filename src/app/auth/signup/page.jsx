import AuthLayout from "@/components/Layout/AuthLayout";
import SignupLeftPanel from "@/components/Auth/Signup/Signup-left-panel";
import SignupForm from "@/components/Auth/Signup/SignupForm";

export default function LoginPage() {
  return (
    <AuthLayout leftPanel={<SignupLeftPanel />}>
      <SignupForm />
    </AuthLayout>
  );
}