"use client"
import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function ModalButton({ title, modalContent }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="
                    bg-green-400
                    border-2
                    border-white
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    hover:scale-105
                    transition
                    cursor-pointer
                "
                onClick={() => setIsOpen(true)}
            >
                {title}
            </button>

            {isOpen &&
                createPortal(
                    <div
                        className="
                            fixed
                            inset-0
                            bg-black/50
                            flex
                            items-center
                            justify-center
                            z-50
                        "
                        onClick={() => setIsOpen(false)}
                    >
                        <div
                            className="
                                bg-white
                                rounded-2xl
                                shadow-xl
                                p-6
                                max-w-lg
                                w-[90%]
                                relative
                            "
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="
                                    absolute
                                    top-3
                                    right-3
                                    text-xl
                                    font-bold
                                    text-gray-500
                                    hover:text-black
                                "
                                onClick={() => setIsOpen(false)}
                            >
                                ×
                            </button>

                            <h2 className="text-2xl font-bold mb-4">
                                {title}
                            </h2>

                            <div className="text-gray-700">
                                {modalContent}
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}