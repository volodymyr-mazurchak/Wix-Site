import React from 'react';
import './MessageBox.scss';
import {SvgMessageBox} from '../SVG/SVG.tsx';

export function MessageBox(props) {
    return (
        <div className="message-box">
            <SvgMessageBox />
        </div>
    );
}