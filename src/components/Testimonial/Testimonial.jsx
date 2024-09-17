import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Importing necessary CSS for react-slick

const TestimonialsData = [
  {
    id: 1,
    name: "Akhilesh Nair",
    text: "MentorLink’s chat feature keeps me connected with my mentor anytime. The video calls feel just like in-person sessions, making learning more engaging.",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Shreyas kadam",
    text: "I love the quick responses through the chat feature. Video calls make discussions feel personal and effective, even from a distance",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Shahid Shaikh",
    text: "The online chat makes it easy to get help whenever I need it. Video calls bring our sessions to life, making them more interactive",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Smita Patil",
    text: "MentorLink's chat keeps communication fast and easy. Video calls are a great way to connect face-to-face without needing to meet in person",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
  {
    id: 6,
    name: " Anita Jadhav",
    text: "MentorLink has connected me with an amazing mentor who is always available via chat. Our video calls make learning interactive, and their guidance has been invaluable.",
    img: "https://picsum.photos/104/104",
    delay: 1.1,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true, // Enabled dots for navigation
    arrows: true, // Enable or disable arrows
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3, // Default to 3 slides for larger screens
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl ">
            What Our Students Say About Us
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                  {/* Upper section */}
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={item.img}
                      alt={`${item.name}'s profile`}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="text-xl font-bold text-black/80">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  {/* Bottom section */}
                  <div className="py-6 space-y-4">
                    <p className="text-sm text-gray-500">{item.text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
