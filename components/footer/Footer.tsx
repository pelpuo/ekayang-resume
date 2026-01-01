import React from 'react'

function Footer() {
  return (
    // The outer div spans 100% width and holds the top border
    <footer className="w-full border-t border-gray-600 mt-12">
        {/* The inner div centers the content to 1200px */}
        <div className="max-w-[1200px] w-full mx-auto py-8 flex items-center justify-center px-4">
            <p className="m-0 text-sm text-gray-600">
                © {new Date().getFullYear()} — Edwin Pelpuo Kayang
            </p>
            {/* <div className="flex">
                <a href="/privacy" className="mx-2 text-blue-600 no-underline hover:underline">Privacy</a>
                <a href="/terms" className="mx-2 text-blue-600 no-underline hover:underline">Terms</a>
            </div> */}
        </div>
    </footer>
  )
}

export default Footer