"use client";
import React from "react";
import Link from "next/link";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Input } from "components/primary/input";
import { MyButton } from "components/primary/btn";

export default function ChangePasswordPage() {
  const router = useRouter();
  const init = { password: "", confirm: "" };

  async function onSubmit(values: typeof init) {
    console.log(values);
    toast.success("Password has been changed successfully!", {
      onClose: () => router.replace("/password/success"),
    });
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={init}>
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className="min-w-80 w-5/6 lg:w-2/5 2xl:w-1/3 p-5% lg:p-10 flex gap-10 flex-col rounded-xl shadow bg-white"
        >
          <header className="flex gap-2 flex-col">
            <h2 className="text-blue-dark lg:text-xl">
              We sent a code to your mail
            </h2>
            <p className="text-sm text-gray-600">
              Kindly enter the 6-digit code sent to your email
            </p>
          </header>

          <div className="flex flex-col gap-4">
            <Input
              isPassword
              type="password"
              name="password"
              label="New password"
              placeholder="Create password"
            />

            <Input
              isPassword
              type="password"
              name="confirm"
              label="Confirm password"
              placeholder="Confirm password"
            />

            <p className="-mt-2 text-sm text-gray-400">
              Password must contain at least 8 characters, one number, one
              symbol, one lowercase letter and one uppercase letter
            </p>
          </div>

          <footer className="flex gap-4 flex-col items-center">
            <MyButton className="w-full">Submit</MyButton>

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
