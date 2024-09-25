import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useCategory } from './CategoryContext';

export default function AddCategory() {
  const axiosPrivate = useAxiosPrivate();
  const { setCategories } = useCategory();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('اسم الفئة مطلوب'),
    description: Yup.string(),
    image: Yup.mixed().required('يجب تحديد صورة'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => { // Destructure resetForm here
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('image', values.image);

        const response = await axiosPrivate.post('/categories', formData, {
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        });
        setCategories(prevCategories => [...prevCategories, response.data]);

        console.log('New category added:', response.data);
        toast.success('تمت إضافة الفئة بنجاح');
        resetForm(); // Call resetForm to clear the form

      } catch (error) {
        console.error('Error adding new category:', error);
        toast.error('حدث خطأ أثناء إضافة الفئة');
      }
    },
  });

  return (
    <div className='modal fade' id='kt_modal_add_category' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <div className='text-center mb-13'>
              <h1 className='mb-3'>إضافة فئة جديدة</h1>
            </div>

            <form onSubmit={formik.handleSubmit} >

              <div className='mb-8'>
                <label className='form-label'>اسم الفئة</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='أدخل اسم الفئة'
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </div>

              <div className='mb-8'>
                <label className='form-label'>الوصف</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='أدخل الوصف'
                  name='description'
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </div>

              <div className='mb-8'>
                <label className='form-label'>صورة</label>
                <input
                  type='file'
                  className='form-control'
                  name='image'
                  onChange={(event) => formik.setFieldValue('image', event.target.files[0])}
                />
                {formik.touched.image && formik.errors.image ? (
                  <div>{formik.errors.image}</div>
                ) : null}
              </div>

              <div className='d-grid'>
                <button type='submit' className='btn btn-info text-white'>
                  إضافة
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
