import hp01 from './images/hp01.jpg';
import hp02 from './images/hp02.jpg';
import hp03 from './images/hp03.jpg';
import hp04 from './images/hp04.jpg';

const data = () => {
    return (
        [
            {   
                id: 0,
                name: "Beoplay HX Active Noise Cancelling Wireless Headphones (Timber)",
                price: 790.04,
                src: hp01,
            },
            {   
                id: 1,
                name: "Beoplay HX Active Noise Cancelling Wireless Headphones (Black Anthracite)",
                price: 790.04,
                src: hp02,
            },
            {   
                id: 2,
                name: "Beoplay HX Portal Noise Cancelling Wireless Headphones (Black Anthracite)",
                price: 790.04,
                src: hp03,
            },
            {   
                id: 3,
                name: "Beoplay HX Active Noise Cancelling Wireless Headphones (Grey Mist)",
                price: 790.04,
                src: hp04,
            }
        ]
    );
}

export {data};