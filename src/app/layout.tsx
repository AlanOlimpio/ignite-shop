"use client";

import { ServerStylesheet } from "@/ServerStylesheet";

import Header from "@/components/Header";
import { Container } from "@/styles/Layout";
import { CartStoreContextProvider } from "@/contexts/CartStore";
import { DrawerContextProvider } from "@/contexts/Drawer";

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
            <DrawerContextProvider>
              <CartStoreContextProvider>
                <Header />
                {children}
              </CartStoreContextProvider>
            </DrawerContextProvider>
          </Container>
        </ServerStylesheet>
      </body>
    </html>
  );
}
