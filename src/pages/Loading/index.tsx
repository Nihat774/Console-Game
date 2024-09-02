import React from 'react'

function LoadingPage() {
    return (
        <>
            <div className='h-[80vh] flex items-center justify-center'>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
            </div>
        </>
    )
}

export default LoadingPage
