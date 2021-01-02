import React from "react"


    export default function Sprite({ image, data}) {
    const {x, y, h, w} = data;

    document.addEventListener('keydown', function(event){
        switch(<any>event.key</any>) {
            case 'w':
                console.log('up')
                break;
            case 'ArrowUp':
                console.log('up')
                break;
            case 'a':
                console.log('left')
                break;
            case 'ArrowLeft':
                console.log('left')
                break;
            case 'd':
                console.log('right')
                x = x + 1
                break;
            case 'ArrowRight':
                console.log('right')
                break;
            case 's':
                console.log('Down')
                break;
            case 'ArrowDown':
                console.log('Down')
                break;
            default:
                return event.key

        }
        
    
        //debugging statment to get key codes and key pressed       
        //console.log(`Key: ${event.key} with keycode ${event.keyCode} pressed`)
    })
    



    return ( 
        <div 
            style={{
             display: "inline-block",
             height: `${h}px`,
             width: `${w}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`,
        }}

            />
        )
    }