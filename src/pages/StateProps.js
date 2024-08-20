// StateProps.js
// rafce

import React, { useState } from 'react'
import dataBase from '../database/data.json'

const StateProps = () => {

    let [data, setData] = useState(dataBase);

    // const arr = [1,4,7]
    // const abc = arr.map((x)=>{
    //     return `<button>${x}</button>`
    // })
    // let addArr = [...arr, 20]
    // console.log(arr, addArr);

    let likeFun = (itemId) => {
        // console.log( [...data.items, {name:1000}] );
        
        let edit = data.items.map((obj, index)=>{
            if(obj.id == itemId){
                obj.like ++;
            }
            return obj;
        })

        // data.items[0].items.like = 5; 얘는 값이 수정이 안됨. setData로 건드려줘야 한번 리렌더링 됨.
        setData({items:edit})
    }

  return (
    <div className='info'>
        <div className='items'>
            {
                data.items.map((item)=>(
                    //.map(()=>{ return A })  두개가
                    //.map(()=>(A))           같은거임
                    <Item item={item} aa="100" key={item.id} likeFun={likeFun} />
                ))
            }
        </div>
    </div>
  )
  
}

let Item = ( {item, likeFun} ) => {
    // Item = ( {item, aa} )
    console.log(item);
    return(
        <figure>
            <img src={item.url} />
            <figcaption>
                {item.title}
                <button onClick={ ()=>{ likeFun(item.id) } }>{item.like}</button>
            </figcaption>
        </figure>
    )
}

export default StateProps