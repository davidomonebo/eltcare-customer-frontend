"use client";
import Link from "next/link";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Input } from "components/primary/input";
import { MyButton } from "components/primary/btn";

export default function SignupPage() {
  const router = useRouter();
  const init = {
    dob: "",
    email: "",
    confirm: "",
    password: "",
    last_name: "",
    first_name: "",
  };
  async function onSubmit(values: typeof init) {
    console.log(values);
    toast.success("Sign up successfully!", {
      onClose: () => router.replace("/sign-in"),
    });
  }

  return (
    <Formik initialValues={init} onSubmit={onSubmit}>
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className="flex gap-10 flex-1 flex-col"
        >
          <header className="flex flex-col">
            <h2 className="font-bold text-3xl lg:text-5xl text-blue-dark">
              Create new account
            </h2>
          </header>

          <div className="flex flex-wrap gap-4">
            <Input
              type="text"
              name="first_name"
              label="First name"
              placeholder="Enter your first name"
              containerClassName="flex-1 basis-60"
            />

            <Input
              type="text"
              name="last_name"
              label="Last name"
              placeholder="Enter your last name"
              containerClassName="flex-1 basis-60"
            />

            <Input
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter your email"
              containerClassName="flex-1 basis-60"
            />

            <Input
              type="date"
              name="dob"
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              containerClassName="flex-1 basis-60"
            />

            <Input
              isPassword
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              containerClassName="flex-1 basis-full"
            />

            <p className="-mt-2 text-sm text-gray-400">
              Password must contain at least 8 characters, one number, one
              symbol, one lowercase letter and one uppercase letter
            </p>

            <Input
              isPassword
              type="password"
              name="confirm"
              label="Confirm Password"
              placeholder="Confirm password"
              containerClassName="flex-1 basis-full"
            />

            <p className="flex gap-3 items-center justify-center">
              <input
                required
                name="agree"
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
              />
              <label htmlFor="agree" className="text-sm text-blue-dark">
                I&#39;ve read and agree with Terms of Service and our Privacy
                Policy
              </label>
            </p>
          </div>

          <footer className="flex gap-4 flex-col items-center">
            <MyButton className="w-full lg:w-4/5">Login</MyButton>
            <span className="text-gray-500">
              Already a member?{" "}
              <Link replace href="/sign-in" className="text-blue-main">
                Sign in
              </Link>
            </span>
          </footer>
        </form>
      )}
    </Formik>
  );
}
