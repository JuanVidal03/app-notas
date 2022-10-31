import React, { useState } from 'react';
import { getNumbers } from '../../services/observableServices';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('Subscription to Observable');

        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('new value: ', newNumber);
                    setNumber(newNumber);
                },
                err(error){
                    alert(`Something went wrong: ${error}`);
                    console.log('Error in Observable')
                },
                completed(){
                    alert(`Finished with: ${number}`);
                    console.log('Done with the Observable')
                }
            }
        )

        console.log('Finished receving numbers');
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Obtain new numbers</button>
        </div>
    );
}

export default ObservableExample;
