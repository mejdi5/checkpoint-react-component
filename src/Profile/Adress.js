import React from 'react';
const Adress = () => {
    let adress = {
        city : 'Nabeul',
        avenue: 'Bourguiba Avenue',
        cp: 8011
    }
    return ( 
        <>
        <p className="adress">{adress.avenue} {adress.cp} {adress.city}</p>
        </>
     );
}
 
export default Adress;