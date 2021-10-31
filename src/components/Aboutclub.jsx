import React from 'react'

function Aboutclub() {
    return (
        <div className='container row aboutClub'>
            <img src="assets/photos/heart.png" className='col-12 col-lg-6'style={heartStyle} alt="heart" />
            <div className='col-12 col-lg-6 '>
                <b >Prakruti</b> is the social welfare club formed from the merger of two other clubs, Animals Welfare club and Incredible NITT. We believe that true beauty is found in nature, and we work to preserve the natural flora and fauna of the campus.
                Taking care of the birds, dogs, flora and every type of livelihood that is a part of nature and adds to its beauty is what we do round the clock. Our team also helps the animals and birds on campus, who can't speak like us, but can count on us for medical care when they are ill.
                We also work to keep a count of the animals and birds inside the campus and help in preserving them.

            </div>
        </div>
    )
}
const heartStyle = {
    width: '40%',
    minWidth: '250px'
}
export default Aboutclub
