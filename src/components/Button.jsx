import React from 'react'

export default function Button({ text, isReset }) {
    return <>
        {
            isReset ? <button
                style={{
                    background: "red",
                    width: 20,
                    textAlign: "center",
                    color: "white"
                }}
            >
                {text}
            </button>
                : <button
                    style={{
                        border: "solid 1px",
                        borderRadius: "25%",
                        width: 20,
                        textAlign: "center",
                    }}
                >
                    {text}
                </button>
        }
    </>
}
