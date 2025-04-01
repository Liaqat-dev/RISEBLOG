

function Contact() {
    return (
        <div>
            {/* Clipped element */}
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    background: 'blue',
                    clipPath: 'url(#concaveClip)',
                    WebkitClipPath: 'url(#concaveClip)'
                }}
            >
                {/* Your content here */}
            </div>

            {/* SVG definition */}
            <svg style={{position: 'absolute', width: 0, height: 0}}>
                <defs>
                    <clipPath id="concaveClip" clipPathUnits="objectBoundingBox">
                        {/* Correct concave path */}
                        <path d="M0,0
                     L0.8,0
                     Q0.9,0.1 1,0.2
                     L1,1
                     0,1
                     Z"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default Contact;