import React from 'react';

const SingleData = (props) => {
    console.log(props);
    const { name, backimage, description, min, profile } = props.singledata;
    return (
        <div>
            <div className="card w-full h-full  bg-base-100 shadow-2xl">
                <figure>
                    <img className="w-full" src={backimage} alt="" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div className="flex">
                            <span className="mr-1">
                                <div className="flex ">
                                    <figure>
                                        <img className="w-8 rounded-full" src={profile} alt="" />
                                    </figure>
                                    <div>
                                        <div className='ms-4'>
                                            <h5> {name} </h5>
                                        </div>
                                        <div className='ms-4'>
                                            <h6>Mar 14 (4 Days ago)</h6>
                                        </div>

                                    </div>


                                </div>
                            </span>

                        </div>
                        <div className="flex">
                            <div><span>{min}</span> min read</div>
                            <div>
                                <button>
                                    <svg onClick={()=>props.count(props.singledata)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                    <h2 className="card-title">{description}</h2>
                    <h4>#beginners #programming</h4>




                    <div className="flex justify-between">
                        <button onClick={()=>props.takeMinute(min)}>Mark as read</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;