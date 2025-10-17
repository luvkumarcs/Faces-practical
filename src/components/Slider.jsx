import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import video_img from "../assets/images/video-img.jpg";
import video_img2 from "../assets/images/video-img2.jpg";
import star from "../assets/images/star.svg";
import twitter from "../assets/images/twitter.svg";
import linkdin from "../assets/images/linkdin.svg";
import testimonial_video from "../assets/video/testimonial-video.mp4";

const Sliders = () => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            // Optional settings
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        // autoplay: true,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                variableWidth: false,
                centerMode: true,
              }
            },
          ]
      };

    const sliderData = [
        {
            video: testimonial_video,
            img: video_img,
            description: "It’s the only consent form I recommend to you because they have the consent form built in already",
            name: "Dr. Razvan",
        },
        {
            video: testimonial_video,
            img: video_img2,
            description: "“There’s actually something quite special about Faces App”",
            name: "Dr. Hany Abi Ghosn",
        },
        {
            video: testimonial_video,
            img: video_img,
            description: "It’s the only consent form I recommend to you because they have the consent form built in already",
            name: "Dr. Razvan",
        },
        {
            video: testimonial_video,
            img: video_img2,
            description: "“There’s actually something quite special about Faces App”",
            name: "Dr. Hany Abi Ghosn",
        },
    ]

    return (
        <div className='testimonial-section common-top-section-space'>
            {/* <div className='container'> */}
            <div className='inner-testimonial'>
            <Slider {...settings}>
                {
                    sliderData.map((item, index) => (
                        <div key={index}>
                            <div className='testimonial-card'>
                                <div className='tesimonial-video'>
                                    <a data-fancybox="gallery" href={item.video}>
                                        <img src={item.img} alt="img" />
                                    </a>
                                </div>
                                <div className="tesimonial-content">
                                    <div className="testimonial-content-top">
                                        <ul className="stars">
                                            {
                                                [...Array(5)].map((_, index) => (
                                                    <li key={index}>
                                                        <img src={star} alt="star" />
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="name-social-icon-wrap">
                                        <p>
                                            {item.name}
                                        </p>
                                        <ul className="social-icon">
                                            <li>
                                                <a href="#">
                                                    <img src={twitter} alt="icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src={linkdin} alt="icon" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Sliders;
