import React from 'react';

export function SvgLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg 
            preserveAspectRatio="xMidYMid meet" 
            data-bbox="73.5 60 53 80" 
            viewBox="73.5 60 53 80" 
            xmlns="http://www.w3.org/2000/svg" 
            data-type="shape" 
            role="img"
            {...props}
        >
            <g>
                <path d="M95.1 74l-21.6 32h9.4l21.6-32h-9.4z"></path>
                <path d="M108 69c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5"></path>
                <path d="M112.2 74l-34.7 52h9.3l34.7-52h-9.3z"></path>
                <path d="M117.1 94l-21.6 32h9.4l21.6-32h-9.4z"></path>
                <path d="M92 140c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5"></path>
            </g>
        </svg>
    );
}

export function SvgAvatar(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" {...props}>
            <g>
                <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
            </g>
        </svg>
    );
}

export function SvgCartAndNumber(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 329.7 134.5" data-hook="svg-icon-6"  {...props}>
            <path d="M281.6 3c35.7 10.7 56 47.6 45.2 83.3s-47.6 56-83.3 45.2c-35.7-10.7-56-47.6-45.2-83.3C209 13.1 245.9-7.2 281.6 3z"></path>
            <text className="svg-text" x="265" y="69" dy=".35em" textAnchor="middle" data-hook="items-count">0</text>
            <path d="M74.1 134.4c-8.7 0-16.2-7.4-16.2-16.2S65.3 102 74.1 102s16.2 7.4 16.2 16.2-7.4 16.2-16.2 16.2zm0-21.7c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zM120.5 134.5c-8.7 0-16.2-7.4-16.2-16.2s7.4-16.2 16.2-16.2 16.2 7.4 16.2 16.2-7.4 16.2-16.2 16.2zm0-21.7c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6c3.1 0 5.6-2.5 5.6-5.6s-2.5-5.6-5.6-5.6z"></path>
            <path d="M141.2 92.1L53.5 92.1 23 10.6 0 10.6 0 0 30.4 0 61.2 81.6 133.5 81.6 152.4 30.4 38.5 30.4 34.8 19.9 167.9 19.9z"></path>
        </svg>
    );
}

export function SvgCrossBtn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <defs>
                <filter id="close_svg__a" width="136.7%" height="135.5%" x="-18.3%" y="-17.8%" filterUnits="objectBoundingBox">
                    <feMorphology in="SourceAlpha" operator="dilate" radius="9" result="shadowSpreadOuter1"></feMorphology>
                    <feOffset dx="2" dy="12" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="14"></feGaussianBlur>
                    <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                    <feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
                </filter>
            </defs>
            <g fillRule="evenodd" filter="url(#close_svg__a)" transform="translate(-421 -24)">
                <path d="M439.77 28l1.23 1.23-6.77 6.77 6.77 6.77-1.23 1.23-6.77-6.77-6.77 6.77-1.23-1.23 6.769-6.77L425 29.23l1.23-1.23 6.77 6.769L439.77 28z"></path>
            </g>
        </svg>
    );
}

export function SvgMessageBox(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg 
            viewBox="0 0 23 23.36" 
            fill="currentColor" 
            width="26px" height="26px"
        >
            <path d="M22.81,9.41a11.49,11.49,0,1,0-7.47,12.93.47.47,0,0,1,.3,0l3.05,1a1,1,0,0,0,1.3-1V19.42a.48.48,0,0,1,.13-.32,11.63,11.63,0,0,0,1.3-1.79A11.47,11.47,0,0,0,22.81,9.41ZM7.5,12.5a1,1,0,1,1,1-1A1,1,0,0,1,7.5,12.5Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,11.5,12.5Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,15.5,12.5Z"></path>
        </svg>
    );
}

export function SvgBackToTopBtn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg className="svg-back-to-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
	        <path className="svg-back-to-top__path-one" d="M44 0H0v44h44"></path>
	        <path className="svg-back-to-top__path-two" d="M30.588 27.233L22 18.366l-8.588 8.867-1.078-1.043L22 16.21l9.666 9.98-1.078 1.043z"></path>
        </svg>
    );
}

export function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path fill="currentColor" d="M12.159 7.2h-3.36v-3.36c0-0.442-0.358-0.48-0.8-0.48s-0.8 0.038-0.8 0.48v3.36h-3.359c-0.442 0-0.48 0.358-0.48 0.8s0.038 0.8 0.48 0.8h3.359v3.36c0 0.442 0.358 0.48 0.8 0.48s0.8-0.038 0.8-0.48v-3.36h3.36c0.442 0 0.481-0.358 0.481-0.8s-0.038-0.8-0.481-0.8z"></path>
        </svg>
    );
}

export function SvgMinus(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path fill="currentColor" d="M12.159 7.2h-8.319c-0.442 0-0.48 0.358-0.48 0.8s0.038 0.8 0.48 0.8h8.319c0.442 0 0.481-0.358 0.481-0.8s-0.038-0.8-0.481-0.8z"></path>
        </svg>
    );
}