import React from 'react';
import type {Metadata} from "next";
import "./globals.css";
import {Toaster} from 'react-hot-toast';
import {AppStoreProvider} from "@/state/AppStoreProvider";

export const metadata: Metadata = {
    title: 'Test App',
    description: 'This is test App',
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <AppStoreProvider>
            {children}
        </AppStoreProvider>
        <Toaster position='top-left'/>
        </body>
        </html>
    );
}