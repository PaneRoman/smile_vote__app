import { Component } from 'react';

import './smile-item.css';


// class SmileItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             clickCounter: 0
//         }
//     }

//     onClickCount = (event) => {
//         // this.setState(({clickCounter}) => ({
//         //     clickCounter: clickCounter + 1
//         // }))

//         // this.props.onToggle(event.currentTarget.getAttribute('data-toggle'))
//     }

//     render() {

//         const {name, src, clickCounter, onToggle} = this.props;
//         // const {clickCounter} = this.state;

//         return(
//             <li className='smile-item'>
//                 <img 
//                     src={src} 
//                     alt={name + ' smile'}
//                     // onClick={this.onClickCount}
//                     onClick={onToggle}
//                     data-toggle={name} />
                    
//                 <span>{clickCounter}</span>
//             </li>
//         );
//     }
// }


function SmileItem({name, src, clickCounter, onToggle}) {

   return (
        <li className='smile-item'>
            <img 
                src={src} 
                alt={name + ' smile'}
                // onClick={this.onClickCount}
                onClick={onToggle}
                data-toggle={name} />
        
                <span>{clickCounter}</span>
        </li>
   ); 
}

export default SmileItem;
