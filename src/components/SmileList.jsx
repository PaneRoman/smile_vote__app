import { Component } from 'react';

// import smileIconSrc from '../svg/smile-icon_smile.svg';
// import confusedIconSrc from '../svg/smile-icon_confused.svg';
// import brightIconSrc from '../svg/smile-icon_bright.svg';
// import angryIconSrc from '../svg/smile-icon_angry.svg'

import './smile-list.css';

import SmileIcon from './SmileIcon';
import SmileItem from './SmileItem';
import Button from './Button';
import WinSmileItem from './WinSmileItem';
import WinSmileIcon from './WinSmileIcon';


// function SmileList() {
//     const smileData = [
//         {src: smileIconSrc, name: 'smile', id: 1},
//         {src: confusedIconSrc, name: 'confused', id: 2},
//         {src: brightIconSrc, name: 'bright', id: 3},
//         {src: angryIconSrc, name: 'angry', id: 4}
//     ]
//     // const smileSource = [smile, confused, bright, angry];
//     // let keyCount = 0;

//     const smileElements = smileData.map(data => {
//         const {id, ...dataProps} = data;
//         // keyCount++;
//         return (
//             <SmileItem 
//                 key={id} 
//                 {...dataProps}
//                 onToggleProp />)
        
//     })

//     console.log(smileElements);

//     return (
//         <div className='smile-list'>
//             <ul>
//                 {smileElements}
//             </ul>
//         </div>
        
//     );
// }



class SmileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // smileData: [  //SmileItem src version
            //     {src: smileIconSrc, name: 'smile', id: 1, clickCounter: 0},
            //     {src: confusedIconSrc, name: 'confused', id: 2, clickCounter: 0},
            //     {src: brightIconSrc, name: 'bright', id: 3, clickCounter: 0},
            //     {src: angryIconSrc, name: 'angry', id: 4, clickCounter: 0}
            // ],

            // smileData: [     //SmileIcon SVG Sprite version 1 (smile-icons-sprite.svg)
            //     {name: 'smile', color: 'yellow', size: 150, id: 1, clickCounter: 0},
            //     {name: 'confused', color: 'yellow', size: 150, id: 2, clickCounter: 0},
            //     {name: 'bright', color: 'yellow', size: 150, id: 3, clickCounter: 0},
            //     {name: 'angry', color: 'yellow', size: 150, id: 4, clickCounter: 0}
            // ],

            smileData: [     //SmileIcon SVG Sprite version 2 (smile-icons-sprite_2.svg)
                {name: 'smile', color: '#61dafb', size: 150, id: 1, clickCounter: 0},
                {name: 'stars', color: '#61dafb', size: 150, id: 2, clickCounter: 0},
                {name: 'wink', color: '#61dafb', size: 150, id: 3, clickCounter: 0},
                {name: 'tongue', color: '#61dafb', size: 150, id: 4, clickCounter: 0},
                {name: 'beam', color: '#61dafb', size: 150, id: 5, clickCounter: 0},
                {name: 'squint', color: '#61dafb', size: 150, id: 6, clickCounter: 0},
            ],

            winnerData: ''

        }
    }

    // onToggle = (event) => { // rewenie 4erez Event i data-toggle atrribut (smotrt' v SmileItem componente)

    //     // console.log(event.currentTarget.getAttribute('data-toggle'));
    //     const toggle = event.currentTarget.getAttribute('data-toggle');

    //     this.setState(({smileData}) => ({
    //         smileData: smileData.map(item => {
    //             if (item.name === toggle) {
    //                 return {...item, clickCounter: ++item.clickCounter};
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggle = (toggle) => {  // rewenie cherez peredachy Name kak Toggle (smotrt' v SmileIcon componente)
        console.log(toggle);
        
        this.setState(({smileData}) => ({
            smileData: smileData.map(item => {
                if (item.name === toggle) {
                    return {...item, clickCounter: ++item.clickCounter};
                }
                return item;
            })
        }))
    }

    onGetWinner = () => {
        this.setState(({smileData}) => {
            const winnerData = [...smileData].sort((a, b) => b.clickCounter - a.clickCounter)[0];
            return {
                winnerData: winnerData
            }
           
        }) 
        
    }

    onVoteAgain = () => {
        this.setState({
            winnerData: ''
        })
    }



    render() {
        const {smileData, winnerData} = this.state;

        let smileElements;
        let listClass = 'smile-list';
        let buttonName = 'Winner';
        let buttonClickMethod = this.onGetWinner;
        // const renderData = this.checkWinner(smileData, winnerIsReady);
        
        if (winnerData) {
            listClass += ' winner';
            buttonName = 'Vote Again';
            buttonClickMethod = this.onVoteAgain;

            // smileElements = <WinSmileItem {...winnerData} />
            smileElements = <WinSmileIcon {...winnerData} />

        } else {
            smileElements = smileData.map(data => {
                const {id, ...dataProps} = data;
    
                return (
                    // <SmileItem 
                    //     key={id} 
                    //     {...dataProps}
                    //     onToggle={this.onToggle} />

                    <SmileIcon 
                        key={id} 
                        {...dataProps}
                        onToggle={this.onToggle} />
                        
                        )
                
            })
        }
        
        console.log('winnerData', winnerData)
        console.log('smileElements', smileElements);

        return (
            <div className='smile-list-conteiner'>
                <ul className={listClass}>
                    {smileElements}
                </ul>

                <Button 
                    buttonName={buttonName}
                    buttonClickMethod={buttonClickMethod} />
            </div>
        );
    }
}

export default SmileList;