
import { Poppins } from "next/font/google";


const poppins = Poppins({
    subsets: ['latin'],       
    weight: ['400', '700'],     
    display: 'swap',            
  });


export default function ailayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className}`}
      
      >
   
      <div className="min-h-screen"> 
      {children}
      </div>
    
      </body>
    </html>
  );
}
