import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useCategory } from './CategoryContext';

export default function EditCategory({ onClose }) {
  const axiosPrivate = useAxiosPrivate();
  const { setCategories, categoryId } = useCategory();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('اسم الفئة مطلوب'),
    description: Yup.string(),
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axiosPrivate.get(`/categories/${categoryId}`);
        formik.setValues({
          name: response.data.name,
          description: response.data.description,
          image: null, 
        });
      } catch (error) {
        console.error('Error fetching category details:', error);
        toast.error('حدث خطأ أثناء جلب تفاصيل الفئة');
      }
    };
  
    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId]);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        const formData = new FormData();
        formData.append('id', categoryId);
        formData.append('name', values.name);
        formData.append('description', values.description);
        
        // Check if values.image exists before appending it to formData
        if (values.image) {
          formData.append('image', values.image);
        } else {
          formData.append('image', ''); // Use an empty string as a placeholder for the image
        }
    
        const response = await axiosPrivate.put('/categories', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
    
        setCategories(prevCategories => prevCategories.map(cat =>
          cat._id === categoryId ? response.data : cat
        ));
    
        toast.success('تم تحديث الفئة بنجاح');
        // onClose();
    
      } catch (error) {
        console.error('Error updating category:', error);
        toast.error('حدث خطأ أثناء تحديث الفئة');
      }
    },
  });


  
  

  return (
    <div className='modal fade' id='kt_modal_edit_category' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal' onClick={onClose}>
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <div className='text-center mb-13'>
              <h1 className='mb-3'>تعديل الفئة</h1>
            </div>

            <form onSubmit={formik.handleSubmit}>

              <div className='mb-8'>
                <label className='form-label'>اسم الفئة</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='أدخل اسم الفئة'
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className='text-danger'>{formik.errors.name}</div>
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className='text-danger'>{formik.errors.description}</div>
                ) : null}
              </div>

              <div className='mb-8'>
                <label className='form-label'>صورة</label>
                <input
                  type='file'
                  className='form-control'
                  name='image'
                  onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.image && formik.errors.image ? (
                  <div className='text-danger'>{formik.errors.image}</div>
                ) : null}
              </div>

              <div className='d-grid'>
                <button type='submit' className='btn btn-info text-white'>
                  تحديث
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
