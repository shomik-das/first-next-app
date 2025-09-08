import React from "react";
export default function RootLayout({children}: {children: React.ReactNode}){
    return (
        <>  
        <div>20% off for the first three days</div>
        {children}
        </>
    )
}