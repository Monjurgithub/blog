import React from 'react';

const Question = () => {
    return (
        <div className='m-8'>
            <div className="collapse mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Difference Between props vs state
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>The state is owned locally. The component  Props are owned and read only by a parent</p>
                </div>
            </div>
            <div className="collapse mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How useState works?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>useState is React Hook. It allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the set function is called.</p>
                </div>
            </div>
            <div className="collapse mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    what does useEffect do expect data load?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Most Of the time useEffect also use data render.</p>
                </div>
            </div>
            
            <div className="collapse mb-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                how react work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>ReactJS divides the User interface into isolated reusable pieces of code known as components and it also helps to components well organize.</p>
                </div>
            </div>

        </div>
    );
};

export default Question;