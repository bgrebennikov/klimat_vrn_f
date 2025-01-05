import React from "react";


export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <h1>Dashboard Page</h1>
            {children}
        </>
    )
}