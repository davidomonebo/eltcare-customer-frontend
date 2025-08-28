"use client";
import Link from "next/link";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Input } from "components/primary/input";
import { MyButton } from "components/primary/btn";

export default function SigninPage() {
  const router = useRouter();
  const init = { email: "", password: "" };

  async function onSubmit(values: typeof init) {
    console.log(values);
    toast.success("Sign in successfully!", {
      onClose: () => router.replace("/overview"),
    });
  }

  return (
    <Formik initialValues={init} onSubmit={onSubmit}>
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className="my-auto flex gap-10 flex-1 flex-col"
        >
          <header className="flex flex-col">
            <h2 className="font-bold text-3xl lg:text-5xl text-blue-dark">
              Welcome back
            </h2>
            <p className="">Log into your account to continue</p>
          </header>

          <div className="flex flex-col gap-4">
            <Input
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter your email"
            />

            <Input
              isPassword
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
            />

            <Link href="/password/forgot" className="-mt-2 text-blue-dark">
              Forgot password?
            </Link>
          </div>

          <footer className="flex gap-4 flex-col items-center">
            <MyButton className="w-full lg:w-4/5">Login</MyButton>
            <span className="text-gray-500">
              Don&#39;t have an account?{" "}
              <Link replace href="/sign-up" className="text-blue-main">
                Create account
              </Link>
            </span>
          </footer>
        </form>
      )}
    </Formik>
  );
}
