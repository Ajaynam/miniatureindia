
import React from "react";


const WhatsAppIcon = () => {
    return (
        <div className="fixed bottom-2 left-2 md:bottom-4 md:left-4 z-50">
            {/* WhatsApp icon */}
            <a href="https://api.whatsapp.com/send?phone=8879266177&text=Hello! I have a question." target="_blank" rel="noopener noreferrer">
                <img src="travels/whatsapp/whatsapp.gif" alt="WhatsApp Icon" className="w-full h-full" />
            </a>
        </div>
    );
}

export default WhatsAppIcon