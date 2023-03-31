import React from 'react';
import "./ShowClickData.css"

const ShowClickData = (props) => {
    console.log(props.card);
    return (
        <div className='md:col-span-2 border rounded-md'>
            <div className='my-4 text-center'>
                 <h3>Bookmarked Blogs : {props.card.length}</h3>
            </div>
            <div>
                {
                    props.card.map((data) => <h4 className='detailsShow'>{data.description}</h4>)
                }
            </div>
        </div>
    );
};

export default ShowClickData;