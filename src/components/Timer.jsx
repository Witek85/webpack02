import React from 'react';

import style from './Timer.scss';
import CSSModules from 'react-css-modules';


const Timer = () => (
    <div styleName="border grey" className="global">
        <span>13</span>:
        <span>21</span>:
        <span>12</span>
    </div>
)

export default CSSModules(Timer, style, {allowMultiple: true});