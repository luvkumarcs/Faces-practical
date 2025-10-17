import React from 'react'
import apple_icon from '../assets/images/apple-icon.svg'
import playstore_icon from '../assets/images/playstore-icon.svg'

const Store = () => {
  return (
    <div className='store-section common-top-section-space'>
        <div className='container'>
            <div className='inner-store'>
                <h2>
                Manage Your <br /> Aesthetics Business <br /> on the Go
                </h2>
                <p>
                Never miss an appointment and enjoy seamless booking management. Download Faces from the App Store and Google Play for free, and keep your business running smoothly from anywhere.
                </p>
                <div className='btn-wrap'>
                    <a href="#">
                        <img src={apple_icon} alt="icon" />
                        Apple store
                    </a>
                    <a href="#">
                        <img src={playstore_icon} alt="icon" />
                        Play Store
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Store
