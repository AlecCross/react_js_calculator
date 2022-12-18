import React from 'react'

export default function Button({ text, isReset, onClick }) {
    return <>
        {
            isReset ? <button
                onClick={onClick}
                style={{
                    background: "#ff6247",
                    width: 100,
                    borderRadius: "10%",
                    textAlign: "center",
                    color: "white",
                    marginRight: 5,
                    padding: "5px 0 5px 0"
                }}
            >
                {text}
            </button>
                : <button
                    onClick={onClick}
                    style={{
                        border: "solid 1px",
                        borderRadius: "10%",
                        width: 60,
                        textAlign: "center",
                        marginRight: 5,
                        padding: "5px 0 5px 0"
                    }}
                >
                    {text}
                </button>
        }
    </>
}
