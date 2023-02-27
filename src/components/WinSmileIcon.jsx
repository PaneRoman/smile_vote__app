import smileIconsSprite from '../svg/grin_svg_smile/smile-icons-sprite_2.svg';

import './win-smile-icon.css';

export default function WinSmileIcon({name, color, clickCounter}) {

    return (
        <li className='win-smile-icon'>
            <h2 className='header'>{name} boy is Winner !!!</h2>
            <svg 
                className={`icon icon-smile-${name}`}
                fill={color}
                >

                <use xlinkHref={`${smileIconsSprite}#icon-smile-${name}`} />
            </svg>

            <h3>{clickCounter} Votes</h3>
        </li>
    );
}