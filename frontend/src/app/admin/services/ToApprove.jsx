import React, { useState } from 'react';
import axios from '../../api/axios';
import { Buffer } from 'buffer';
import { useService } from '../../services/ServiceContext';

export default function ToApprove() {
    const { services, setServices, handleDelete } = useService(); 
    const [filter, setFilter] = useState('all'); // State to track the filter (all/approved/not approved)

    // Function to render image
    const renderImage = (data) => {
        if (data && data.image && data.image.data) {
            const base64String = Buffer.from(data.image.data).toString('base64');
            return <img src={`data:${data.image.contentType};base64,${base64String}`} alt={data.name} style={{ width: '200px', height: '200px', objectFit:'cover' }} />;
        }
        return null;
    };

    // Function to handle approval of a service
    const approveService = async (serviceId) => {
        try {
            // Send a PUT request with the service ID in the request body
            await axios.put(`/services/${serviceId}`);
            // Optionally, you can update the list of services after approval
            // You can call setServices or any other function to update the service list
            const updatedServices = services.map(service => {
                if (service._id === serviceId) {
                    return { ...service, approved: true };
                }
                return service;
            });
            setServices(updatedServices);
        } catch (err) {
            console.error('Error while approving service:', err);
        }
    }

    const disapproveService = async (serviceId) => {
        try {
            // Send a PUT request with the service ID in the request body
            await axios.put(`/services/${serviceId}`);
            // Optionally, you can update the list of services after approval
            // You can call setServices or any other function to update the service list
            const updatedServices = services.map(service => {
                if (service._id === serviceId) {
                    return { ...service, approved: false };
                }
                return service;
            });
            setServices(updatedServices);
        } catch (err) {
            console.error('Error while approving service:', err);
        }
    }

    // Filter services based on filter type
    const filteredServices = () => {
        if (filter === 'approved') {
            return services.filter(service => service.approved);
        } else if (filter === 'notApproved') {
            return services.filter(service => !service.approved);
        } else {
            return services;
        }
    };

    return (
        <div>
            <div className="flex mb-4">
                <button
                    onClick={() => setFilter('notApproved')}
                    className={`mr-4 bg-[#FFAD71] text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 focus:outline-none focus:bg-teal-600 ${filter === 'notApproved' && 'bg-teal-600'}`}
                >
                    غير الموافق عليها
                </button>
                <button
                    onClick={() => setFilter('approved')}
                    className={`mr-4 bg-[#FFAD71] text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 focus:outline-none focus:bg-teal-600 ${filter === 'approved' && 'bg-blue-600'}`}
                >
                    الموافق عليها
                </button>
                <button
                    onClick={() => setFilter('all')}
                    className={`bg-[#FFAD71] text-white font-semibold py-2 px-4 mx-4 rounded hover:bg-teal-600 focus:outline-none focus:bg-teal-600 ${filter === 'all' && 'bg-blue-600'}`}
                >
                    جميع الخدمات
                </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">الخدمات</h2>
            <div className='flex justify-center items-center gap-2 flex-wrap'>
                {filteredServices().length === 0 ? (
                    <p>لا توجد عناصر لعرضها.</p>
                ) : (
                    filteredServices().map(service => (
                        <div key={service._id} className="bg-white rounded-lg shadow p-6 mb-4 w-60 h-96">
                            {renderImage(service)}
                            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                            <p className="text-gray-600 mb-2">{service.price}</p>
                            <p className="text-gray-600 mb-2">{service.deliveryTime}</p>
                            {service.approved ? (
                                <div className='flex'>
                                    <button
                                        onClick={() => disapproveService(service._id)}
                                        className="bg-[#FFAD71] text-white font-semibold py-2 px-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                    >
                                        عدم الموافقة
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service._id)}
                                        className="bg-blue-500 text-white font-semibold py-2 px-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                    >
                                        حذف
                                    </button>
                                </div>
                            ) : (
                                <div className='flex'>
                                    <button
                                        onClick={() => approveService(service._id)}
                                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                    >
                                        الموافقة
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service._id)}
                                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                    >
                                        حذف
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
