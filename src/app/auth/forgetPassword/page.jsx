import AuthLayout from "@/components/Layout/AuthLayout";
import ForgetPasswordLeftPanel from "@/components/Auth/ForgetPassword/ForgetPasswordLeftPanel";
import ForgetPasswordForm from "@/components/Auth/ForgetPassword/ForgetPasswordForm";

export default function LoginPage() {
  return (
    <AuthLayout leftPanel={<ForgetPasswordLeftPanel />}>
      <ForgetPasswordForm />
    </AuthLayout>
  );
}