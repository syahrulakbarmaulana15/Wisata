import React, {useEffect} from 'react'
import './main.css'
import './main.scss'
import {IoLocationOutline} from 'react-icons/io5'
import {LuClipboardCheck} from 'react-icons/lu'

// Import image 
import img from '../../Assets/img.jpeg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpeg'
import img4 from '../../Assets/img (4).jpeg'
import img5 from '../../Assets/img (5).jpeg'
import img6 from '../../Assets/img (6).png'

import Aos from 'aos'
import 'aos/dist/aos.css'

// array name data
const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Pantai Bali Indramayu',
        location: 'Desa Lamaran Tarung, Kecamatan Cantigi, Indramayu',
        fee: 'Rp. 10.000',
        description: 'Pantai ini menawarkan pemandangan indah dengan pasir putih dan suasana yang menenangkan. Dikenal sebagai tempat untuk menikmati matahari terbenam yang memukau.'
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Pantai Karangsong',
        location: 'Desa Karangsong, Kabupaten Indramayu',
        fee: 'Rp. 5.000',
        description: 'Pantai ini terkenal dengan ekowisata mangrovenya. Anda bisa menikmati keindahan alam sembari berperahu menyusuri hutan mangrove.'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Pulau Biawak',
        location: '40 KM dari pesisir Indramayu, dapat diakses dari Pelabuhan Karangsong',
        fee: 'Rp. 300.000',
        description: 'Pulau eksotis ini dikenal karena keberadaan biawak-biawak besar yang hidup di sana. Selain itu, Anda dapat menikmati snorkeling atau memancing.'
    },

    {
        id:4,
        imgSrc: img4,
        destTitle: 'Alun - Alun Puspawangi',
        location: 'Pusat Kota Indramayu',
        fee: 'Free atau Gratis',
        description: 'Alun-alun ini memiliki wajah baru yang modern dan lebih hijau. Tempat ini cocok untuk rekreasi keluarga, olahraga, atau sekadar bersantai.'
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Pantai Tirtamaya',
        location: 'Juntikedokan, Kecamatan Juntinyuat',
        fee: 'Rp. 10.000',
        description: 'Pantai ramah keluarga dengan fasilitas seperti tempat bermain anak-anak. Pantai Tirtamaya juga merupakan salah satu wisata legendaris di Indramayu. Pantai yang pernah menjadi tuan rumah perhelatan PON.'
    },

    {
        id:6,
        imgSrc: img6,
        destTitle: 'Boomerang Waterpark',
        location: 'Jalan Siliwangi, Indramayu',
        fee: 'Rp 25.000 (weekday) - Rp 30.000 (weekend).',
        description: 'Jalan Siliwangi, Indramayu'
    },
]




const Main = () => {

    // Animasi
    useEffect(()=> {
        
            Aos.init({duration: 2000})
        
        }, [])

    return (
        <section className='main container section'> 
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Wisata
                </h3>
            </div>

            <div className="secContent grid">
                {

                }

                {
                    Data.map(({id, imgSrc, destTitle,location,fee,description}) => {
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {}

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <IoLocationOutline className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fee flex">
                                        <div className="price">
                                            <h5>{fee}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        Details <LuClipboardCheck className="icon"/>
                                    </button>
                                </div>
                             </div>
                        )
                    })
                }
            </div>


        </section>
    )
}

export default Main