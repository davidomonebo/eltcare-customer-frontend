import Link from "next/link";
import { MyButton } from "components/primary/btn";

export default function SuccessPage() {
  return (
    <section className="min-w-80 w-5/6 lg:w-2/5 2xl:w-1/3 p-5% lg:p-10 flex gap-10 flex-col items-center rounded-xl shadow bg-white">
      <div className="w-40 shadow shadow-black/30 aspect-square rounded-full flex items-center justify-center border-4 border-white bg-blue-dark">
        <span className="w-12 aspect-square rounded-full bg-white"></span>
      </div>

      <header className="flex w-full flex-col items-center text-center">
        <h2 className="font-bold text-xl lg:text-3xl text-blue-dark">
          Successful
        </h2>
        <p className="text-sm text-gray-600">
          You have successfully reset your account password. Log into your
          account with your new password to continue
        </p>
      </header>

      <footer className="flex w-full gap-4 flex-col items-center">
        <MyButton className="w-full font-bold">
          <Link replace href="/sign-in" className="">
            Continue to Login
          </Link>
        </MyButton>
      </footer>
    </section>
  );
}
