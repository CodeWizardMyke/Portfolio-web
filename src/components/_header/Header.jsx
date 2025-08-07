import React from 'react'
import { isMobile } from 'react-device-detect';

function Header({ activeSection }) {
    return (
        <>
            { isMobile ? 
                <header
                    style={{
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    backgroundColor: "#0f0f0f9f",
                    color:"#c5cae9",
                    padding: "1rem",
                    zIndex: 100,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                >
                    <strong>{activeSection.toUpperCase()}</strong>
                </header> : "" 
            }
        </>
    );
  }

export default Header