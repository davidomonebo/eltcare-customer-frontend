"use client";
import Link from "next/link";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Input } from "components/primary/input";
import { MyButton } from "components/primary/btn";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const init = { email: "" };
  async function onSubmit(values: typeof init) {
    console.log(values);
    toast.success("Requested an OTP, valdidate in the next page", {
      onClose: () => router.replace("/password/verify"),
    });
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={init}>
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className="min-w-80 w-5/6 lg:w-2/5 2xl:w-1/3 p-5% lg:p-10 flex gap-10 flex-col rounded-xl shadow bg-white"
        >
          <header className="flex gap-2 flex-col items-center text-center">
            <h2 className="text-xl text-blue-dark lg:text-3xl font-black">
              Forgot password?
            </h2>
            <p className="text-sm text-gray-600">
              We&#39;ve got you covered. Provide us your registered email
              address to reset your password
            </p>
          </header>

          <div className="flex flex-col gap-4">
            <Input
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter your email"
            />
          </div>

          <footer className="flex gap-4 flex-col items-center">
            <MyButton className="w-full">Login</MyButton>
            <span className="text-gray-500">
              Don&#39;t have an account?{" "}
              <Link replace href="/sign-up" className="text-blue-main">
                Create account
              </Link>
            </span>

            <MyButton className="w-full lg:w-4/5 !bg-blue-main">
              <Link replace href="/sign-in" className="">
                Back to Login
              </Link>
            </MyButton>
          </footer>
        </form>
      )}
    </Formik>
  );
}
