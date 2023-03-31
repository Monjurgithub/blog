import React, { useEffect, useState } from 'react';
import ShowClickData from '../ShowData/ShowClickData';
import SingleData from '../Singledata/SingleData';
import "./Card.css"
import { adddb } from '../../utilities/Adddata';
import { ToastContainer, toast } from 'react-toastify';

const Card = () => {
    const [data, setData] = useState([]);
    const [spend, setSpend] = useState(0);
    const [card, setCard] = useState([]);


    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("data.json");
            const data = await res.json();
            setData(data);
        }
        loadData();

    }, [])
    const takeMinute =(minute)=>{
        let check = parseInt(minute);
        
        const spendTimePrevious = JSON.parse(sessionStorage.getItem("spendTime"));
        if(spendTimePrevious)
        {
            const addTime = spendTimePrevious + check;
            sessionStorage.setItem("spendTime", addTime);
            setSpend(addTime);

        }
        else{
            sessionStorage.setItem("spendTime", check);
            setSpend(check);
        }
    }
    const count = (showData) =>{
        // console.log(showData.id);
        const {id} =showData;
        const previousData = sessionStorage.getItem(id);
        if(previousData)
        {
           toast("Vai Akbar bookmarked korchan"); 
        }
        else{
           const newBookmarks = [...card, showData];
           setCard(newBookmarks); 
        }
        adddb(showData.id);
        
        

    }
    return (
        
        <div className="w-[90%] mx-auto mt-8">
            <div className="grid md:grid-cols-8 gap-4">
                <div className="md:col-span-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            data.map((singledata) => (
                                <SingleData count={count} takeMinute={takeMinute} key={singledata.id} singledata={singledata}></SingleData>
                            ))
                        }
                    </div>
                </div>
                <div className="md:col-span-2 border rounded-md setPosi">
                    <div className='card spendTimeCount'>
                        <h2 className='text-center'>Spent time on read : {spend} min </h2>
                    </div>
                    <div className='my-4 card'>
                        <ShowClickData card={card}></ShowClickData>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;