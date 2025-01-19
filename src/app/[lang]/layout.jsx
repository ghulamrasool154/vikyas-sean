import "../globals.css";
import MainLayout from "@/layout";
import rtlDetect from "rtl-detect";
import { getDictionary } from "@/localization/get-dictionary";
import { rubik_font } from "@/utils/fonts";
import Head from "next/head";
import { ReduxProvider } from "@/redux/provider";

export default async function RootLayout({ children, params }) {
  const isRtl = rtlDetect.isRtlLang(params.lang);
  const {
    content: { header, footer },
  } = await getDictionary(params.lang);
  let direction = isRtl ? "rtl" : "ltr";

  return (
    <html lang={params.lang} suppressHydrationWarning dir={direction}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        dir={direction}
        className={`bg-backgroundClr font-rubik ${rubik_font.variable}`}
      >
        <ReduxProvider>
          <MainLayout header={header} footer={footer}>
            {children}
          </MainLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
