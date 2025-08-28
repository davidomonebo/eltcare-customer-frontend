import "styles/global.css";
import * as fonts from "app/fonts";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import AuthProvider from "components/providers/auth.provider";
import QueryProvider from "components/providers/query.provider";
import ModalProvider from "components/providers/modal.provider";

export const metadata: Metadata = {
  title: "Kantin Kwari",
  icons: "/favicon.svg",
};

export default function RootLayout(props: React.PropsWithChildren) {
  const fontsClassName = Object.values(fonts).map((item) => item.variable);

  return (
    <html lang="en" className={fontsClassName.join(" ")}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>

      <body>
        <AuthProvider>
          <QueryProvider>
            <ModalProvider>
              <ToastContainer />
              <div id="portal" />
              <div id="root">{props.children}</div>
            </ModalProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
