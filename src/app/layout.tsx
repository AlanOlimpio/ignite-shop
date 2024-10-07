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
            <CartStoreContextProvider>
              <Header />
              {children}
            </CartStoreContextProvider>
          </Container>
        </ServerStylesheet>
      </body>
    </html>
  );
}
