// ShowServices.js
import React from "react";
import axios from "../api/axios"; // Import Axios for making HTTP requests
import ServiceCard from "./ServiceCard";
import Footer from '../home/Footer';
import { useService } from "./ServiceContext";
import { useParams } from "react-router-dom";
import { Buffer } from 'buffer';
import useAuth from "../hooks/useAuth";

export default function ShowServices() {
  const { services } = useService();
  const { id } = useParams();
  const {userId} = useAuth();
  console.log(userId)

  // Filter services by category
  const approvedServices = services.filter(service => service.approved === true)
  const servicesByCat = approvedServices.filter(service => service.categoryId === id);

  // Function to render image from Base64 data
  const renderImage = (data) => {
    if (data && data.image && data.image.data) {
      const base64String = Buffer.from(data.image.data).toString('base64');
      return `data:${data.image.contentType};base64,${base64String}`;
    }
    return null;
  };

  // Function to handle adding a service to the cart
  const addToCart = async (service) => {
    try {
      // Make a POST request to the addToCard API endpoint
      const response = await axios.post('/cards', {
        serviceId: service._id,
        userId, 
        artisanId: service.artisanId 
      }, {
        headers : {
          'Content-Type' : 'application/json'
        }
      });



      console.log('Service added to cart:', response.data);
    } catch (error) {
      console.error('Error adding service to cart:', error);
    }
  };

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Discover our wide range of services tailored to meet your needs.
          </p> */}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesByCat.length > 0 ? (
            servicesByCat.map((ser) => (
              <ServiceCard
                key={ser._id}  
                title={ser.name}
                description={ser.description}
                price={ser.price}
                image={renderImage(ser)}
                artisanName={'MOHAMED'}  // Assuming this is static for all services
                artisanPhoto={process.env.PUBLIC_URL + `/Images/jame3.jpg`}  // Assuming this is static for all services
                addToCart={() => addToCart(ser)} // Pass the addToCart function with service as argument
              />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">No services found for this category.</p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}
