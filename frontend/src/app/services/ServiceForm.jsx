import { useState } from "react";
import { useCategory } from "../admin/categories/CategoryContext";
import { useService } from "./ServiceContext";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { useFormik } from "formik";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export default function ServiceForm() {
  const { categories } = useCategory();
  const { services, setServices } = useService();
  const {axiosPrivate} = useAxiosPrivate();
  const {auth} = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      artisanId : '',
      categoryId : '',
      description: '',
      image: null,
      price :'',
      deliveryTime : '',
    },
   
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('artisanId', '23');
        formData.append('categoryId', values.categoryId);
        formData.append('description', values.description);
        formData.append('image', values.image);
        formData.append('price', values.price);
        formData.append('deliveryTime', values.deliveryTime);
        console.log(formData)
        const response = await axios.post('/services', {
         "name": values.name,
         "artisanId":"23",
         "categoryId": values.categoryId,
         "description": values.description,
         "image": values.image,
         "price":values.price,
         "deliveryTime": values.deliveryTime
        }, {
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        });
        setServices(prevSrv => [...prevSrv, response.data]);

        console.log('New service added:', response.data);
        toast.success('تمت إضافة الفئة بنجاح');
        resetForm(); // Call resetForm to clear the form

      } catch (error) {
        console.error('Error adding new category:', error);
        toast.error('حدث خطأ أثناء إضافة الفئة');
      }
    },
  });

  

  

  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 w-3/4">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">إضافة خدمة جديدة</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">املأ النموذج لإضافة خدمة جديدة.</p>
        <form onSubmit={formik.handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="name">عنوان الخدمة</label>
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              name="name"
              placeholder="أدخل عنوان الخدمة"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="category">الفئة</label>
            <div className="relative">
            <select
                className="appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                name="categoryId"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
              >
                <option disabled value="">اختر الفئة</option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="description">وصف الخدمة</label>
            <textarea
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              name="description"
              placeholder="أدخل وصف الخدمة"
              rows={3}
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="image">معرض الخدمة</label>
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              name="image"
              type="file"
              onChange={(event) => formik.setFieldValue('image', event.target.files[0])}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="price">سعر الخدمة</label>
              <input
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                name="price"
                placeholder="أدخل السعر"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="delivery-time">مدة التسليم</label>
              <input
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                name="deliveryTime"
                placeholder="أدخل وقت التسليم"
                type="number"
                value={formik.values.deliveryTime}
                onChange={formik.handleChange}
                />
                </div>
                </div>
                <div className="px-6 py-4 rounded-b-lg dark:bg-gray-800">
                <button type="submit" className="bg-[#FFAD71] text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-700">
                حفظ الخدمة
                </button>
                </div>
                </form>
                </div>
                </div>
                );
                }
