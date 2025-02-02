import React from 'react'

const Footer = () => {
    const currentYear = Date.now().GetYear;
    console.log(currentYear);
    
  return (
 
     <div className="max-w-4xl border-t border-gray-200 mx-auto text-center mt-6 p-3 ">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
    </div>
   
  )
}

export default Footer
