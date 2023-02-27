import smileIconsSprite from '../svg/grin_svg_smile/smile-icons-sprite_2.svg';

import './smile-icon.css';


export default function SmileIcon({name, color, size, clickCounter, onToggle}) {
    return (
        <li className='smile-icon'>
            <svg 
                className={`icon icon-smile-${name}`}
                fill={color}
                // onClick={onToggle}
                onClick={() => onToggle(name)}
                // data-toggle={name}
                >

                <use xlinkHref={`${smileIconsSprite}#icon-smile-${name}`} />
            </svg>

            <span>{clickCounter}</span>
        </li>
       
    );
}