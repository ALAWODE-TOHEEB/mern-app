import React from "react";

const About = () => {
  return (
    <>
      <section
        className="bg-cover bg-center py-20 md:bg-contain md:bg-no-repeat md:py-32 md:w-full rounded-lg"
        style={{
          backgroundImage:
            "url('https://qreliance.com.ng/static/assets/images/feature/feature-about-thumb-1.jpg')",
        }}
      >
        <div className="container mx-auto">{/* Content of your section */}</div>
      </section>
      <section className="bg-white py-10 flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="container md:w-1/2 mx-auto flex flex-col items-center">
          <div className="flex flex-col justify-start items-start text-left">
            <p className="text-xl font-bold mb-2 text-blue-600 border-l-2 h-auto border-blue-600">
              ABOUT COMPANY
            </p>
            <p className="text-lg mb-2 font-bold">Who We Are</p>
            <p className="text-lg">
              Over <span className="text-blue-600 font-bold">2,500+</span>{" "}
              Customers
            </p>
          </div>

          <hr className="my-8 w-full bg-blue-600" />
          <p className="container mx-auto text-center text-lg p-5">
            The Furniture Delivery Application is a comprehensive
            solution designed to streamline the process of delivering furniture
            to customers. This innovative application combines the power of
            modern technology with a user-friendly interface to offer a seamless
            experience for both furniture retailers and their customers.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-end py-4">
          <img
            src="https://qreliance.com.ng/static/assets/images/home1/about-right-image-1.jpg"
            alt="Image"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default About;
