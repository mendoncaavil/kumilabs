import React, {useState} from 'react'
import './ProductBar.css'
// import vector from './Assets/vector'
import fruit1 from "./Assets/fruit1.png";
import fruit2 from "./Assets/fruit2.png";
import fruit3 from "./Assets/fruit3.png";
import fruit4 from "./Assets/fruit4.png";
import add from "./Assets/add.png";
import minus from "./Assets/minus.png";

import { useDispatch, useSelector } from 'react-redux';




function ProductBar() {

    const [added1, setAdded1] = useState(false);
    const [added2, setAdded2] = useState(false);
    const [added3, setAdded3] = useState(false);
    const [added4, setAdded4] = useState(false);
    const [added5, setAdded5] = useState(false);
    const [added6, setAdded6] = useState(false);
    const [added7, setAdded7] = useState(false);
    const [added8, setAdded8] = useState(false);
    const [added9, setAdded9] = useState(false);

    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

  return (
    <div className='full'>
        <div className='single' id='1'>
            <img src={fruit1}  alt='img' />
            

            { !added1 ?
            <img src={add} alt='img' 
            onClick={()=>{
                dispatch({type:'IN_NUM'});
                setAdded1(!added1);
                }}/> :
                <img src={minus} alt='img' 
                onClick={()=>{
                    dispatch({type:'DE_NUM'});
                    setAdded1(!added1);
                    }}/> }


            <p className='product-price'>$0.69</p>
            <p className='product-name'>Banana 1 ct</p>
            <p className='product-weight'>18 oz</p>
        </div>
        <div className='single' id='2'>
            <img src={fruit2}  alt='img' />


            { !added2 ?
            <img src={add}  alt='img' 
            onClick={()=>{
                dispatch({type:'IN_NUM'});
                setAdded2(!added2);
                }}/> :
                <img src={minus}  alt='img' 
                onClick={()=>{
                    dispatch({type:'DE_NUM'});
                    setAdded2(!added2);
                    }}/> }


            <p className='product-price'>$0.69</p>
            <p className='product-name'>StrawBerry</p>
            <p className='product-weight'>1 lb</p>
        </div>
        <div className='single' id='3'>
            <img src={fruit3}  alt='img' />
            
            { !added3 ?
            <img src={add}  alt='img' 
            onClick={()=>{
                dispatch({type:'IN_NUM'});
                setAdded3(!added3);
                }}/> :
                <img src={minus}  alt='img' 
                onClick={()=>{
                    dispatch({type:'DE_NUM'});
                    setAdded3(!added3);
                    }}/> }


            <p className='product-price'>$0.69</p>
            <p className='product-name'>Yogurt</p>
            <p className='product-weight'>1 lb</p>
        </div>
        <div className='single' id='4'>
            <img src={fruit4} alt='img' />
            
            { !added4 ?
            <img src={add}  alt='img' 
            onClick={()=>{
                dispatch({type:'IN_NUM'});
                setAdded4(!added4);
                }}/> :
                <img src={minus}  alt='img' 
                onClick={()=>{
                    dispatch({type:'DE_NUM'});
                    setAdded4(!added4);
                    }}/> }


            <p className='product-price'>$0.69</p>
            <p className='product-name'>BlackBerry</p>
            <p className='product-weight'>1 lb</p>
        </div>
        <div className='single' id='5'>
            <img src={fruit2} alt='img' />
            
            { !added5 ?
            <img src={add}  alt='img' 
            onClick={()=>{
                dispatch({type:'IN_NUM'});
                setAdded5(!added5);
                }}/> :
                <img src={minus}  alt='img' 
                onClick={()=>{
                    dispatch({type:'DE_NUM'});
                    setAdded5(!added5);
                    }}/> }


            <p  className='product-price'>$0.69</p>
            <p  className='product-name'>StrawBerry</p>
            <p className='product-weight'>1 lb</p>
        </div>
        <div className='single' id='6'>
            <img src={fruit3} alt='img' />
            
            { !added6 ?
            <img src={add}  alt='img' 
            onClick={()=>{
                dispatch({type:'IN_NUM'});
                setAdded6(!added6);
                }}/> :
                <img src={minus}  alt='img' 
                onClick={()=>{
                    dispatch({type:'DE_NUM'});
                    setAdded6(!added6);
                    }}/> }


            <p className='product-price'>$0.69</p>
            <p className='product-name'>Yogurt</p>
            <p className='product-weight'>1 lb</p>
        </div>
        <div className='single' id='7'>
            <img src={fruit1}  alt='img' />
            
            { !added7 ?
            <img src={add}  alt='img' 
            onClick={()=>{
                dispatch({type:'IN_NUM'});
                setAdded7(!added7);
                }}/> :
                <img src={minus}  alt='img' 
                onClick={()=>{
                    dispatch({type:'DE_NUM'});
                    setAdded7(!added7);
                    }}/> }


            <p className='product-price'>$0.69</p>
            <p className='product-name'>Banana</p>
            <p className='product-weight'>1 lb</p>
        </div>
        <div className='single' id='8'>
            <img src={fruit4}  alt='img' />
            

            { !added8 ?
            <img src={add}  alt='img' 
            onClick={()=>{
                dispatch({type:'IN_NUM'});
                setAdded8(!added8);
                }}/> :
                <img src={minus}  alt='img' 
                onClick={()=>{
                    dispatch({type:'DE_NUM'});
                    setAdded8(!added8);
                    }}/> }


            <p className='product-price'>$0.69</p>
            <p className='product-name'>BlackBerry</p>
            <p className='product-weight'>1 lb</p>
        </div>
        <div className='single' id='9'>
            <img src={fruit2}  alt='img' />
            
            { !added9 ?
            <img src={add}  alt='img' 
            onClick={()=>{
                dispatch({type:'IN_NUM'});
                setAdded9(!added9);
                }}/> :
                <img src={minus} alt='img' 
                onClick={()=>{
                    dispatch({type:'DE_NUM'});
                    setAdded9(!added9);
                    }}/> }


            <p className='product-price'>$0.69</p>
            <p className='product-name'>StrawBerry</p>
            <p className='product-weight'>1 lb</p>
        </div>
    </div>

);
}

export default ProductBar