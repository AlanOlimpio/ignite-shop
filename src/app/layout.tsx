"use client";

import { ServerStylesheet } from "@/ServerStylesheet";

import Header from "@/components/Header";
import { Container } from "@/styles/Layout";
import { CartStoreContextProvider } from "@/contexts/CartStore";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ServerStylesheet>
          <Container>
            <Header />
            <CartStoreContextProvider>{children}</CartStoreContextProvider>
          </Container>
        </ServerStylesheet>
      </body>
    </html>
  );
}
