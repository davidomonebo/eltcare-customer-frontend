"use client";
import { toast } from "react-toastify";
import { TopupModal } from "../modals/topup";
import { useModalContext } from "components/providers/modal.provider";

export function Balance() {
  const { setModal } = useModalContext();

  function openTopup() {
    setModal(<TopupModal />);
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText("WALLET-1234567890");
      toast.success("Wallet ID copied to clipboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy Wallet ID");
    }
  }

  return (
    <section className="flex flex-col gap-4">
      <button
        onClick={copyToClipboard}
        className="flex gap-4 justify-end items-center cursor-pointer"
      >
        <span className="text-sm text-gray-600">Wallet ID: 2738271342</span>
        <i className="fas fa-copy text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"></i>
      </button>

      <div className="p-6 flex justify-between items-center rounded-md bg-gray-100">
        <div className="flex flex-col">
          <span className="h2 text-gray-600">Available balance</span>
          <span className="h1 font-bold text-gray-900">₦00.00</span>
        </div>

        <div className="flex gap-2 flex-col items-center">
          <span className="h4">Top up wallet</span>
          <button
            onClick={openTopup}
            className="w-10 h-10 cursor-pointer bg-blue-dark hover:bg-blue-main rounded-full flex items-center justify-center transition-colors"
          >
            <i className="fas fa-plus text-white text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
