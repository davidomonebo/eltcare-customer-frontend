"use client";
import { Formik } from "formik";
import { motion } from "framer-motion";
import { Input } from "components/primary/input";
import { MyButton } from "components/primary/btn";

export function TopupModal() {
  const init = { amount: 0 };

  async function onSubmit(values: typeof init) {
    console.log(values);
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={init}>
      {(props) => (
        <motion.form
          exit={{ y: 10, opacity: 0 }}
          onSubmit={props.handleSubmit}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          className="flex flex-col items-center gap-10 w-5/6 lg:w-1/2 2xl:w-1/3 bg-white p-5% rounded-md shadow-md"
        >
          <header className="">
            <h1 className="h1 font-bold">Wallet Top up</h1>
          </header>

          <div className="flex w-full gap-4 flex-col">
            <Input
              type="number"
              name="amount"
              placeholder=""
              label="Amount:"
              wrapperClassName="flex-1 basis-80"
              containerClassName="gap-4 flex-row !flex-wrap"
              labelClassName="!h4 font-bold text-blue-dark"
            />
          </div>

          <footer className="">
            <MyButton disabled={props.values.amount <= 0}>Proceed</MyButton>
          </footer>
        </motion.form>
      )}
    </Formik>
  );
}
