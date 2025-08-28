"use client";
import React from "react";
import { Formik } from "formik";
import { Input } from "components/primary/input";
import { MyButton } from "components/primary/btn";

export default function VerifyOTPPage() {
  const init = { otp: "" };
  const [countdown, setCountdown] = React.useState(60); // Start with 60 seconds

  React.useEffect(() => {
    // Only run the timer when countdown is greater than 0
    if (countdown > 0) {
      const timer = setTimeout(
        () => setCountdown((prevCountdown) => prevCountdown - 1),
        1000
      );

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleResend = () => {
    if (countdown === 0) {
      // TODO: Implement actual resend logic here
      console.log("Resending OTP...");
      setCountdown(60); // Reset the countdown
    }
  };

  async function onSubmit(values: typeof init) {
    console.log(values);
  }

  return (
    <Formik initialValues={init} onSubmit={onSubmit}>
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className="flex my-auto gap-20 flex-1 flex-col"
        >
          <header className="flex flex-col">
            <h2 className="font-bold text-2xl lg:text-4xl text-blue-dark">
              Enter confirmation code
            </h2>
          </header>

          <div className="flex gap-4">
            <Input
              type="text"
              name="otp"
              placeholder="304566"
              wrapperClassName="w-full"
              labelClassName="text-center"
              containerClassName="gap-5 w-full items-center"
              label="Kindly enter the 6-digit code sent to your email"
            />
          </div>

          <footer className="flex gap-4 flex-col items-center">
            <MyButton type="submit" className="w-full lg:w-4/5">
              Create account
            </MyButton>
            <span className="text-gray-500">
              Didn&#39;t receive code?{" "}
              <button
                type="button"
                onClick={handleResend}
                className="text-blue-main"
              >
                Resend in {String(Math.floor(countdown / 60)).padStart(2, "0")}:
                {String(countdown % 60).padStart(2, "0")}
              </button>
            </span>
          </footer>
        </form>
      )}
    </Formik>
  );
}
