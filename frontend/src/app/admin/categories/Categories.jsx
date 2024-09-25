import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from '../shared-components/Table';
import { useCategory } from './CategoryContext';
import { Buffer } from 'buffer';


export default function Categories() {
  const { categories, handleDelete, setCategoryId } = useCategory();

  const renderImage = (data) => {
    if (data && data.imageData && data.imageData.data) {
      const base64String = Buffer.from(data.imageData.data).toString('base64');
      return <img src={`data:${data.imageData.contentType};base64,${base64String}`} alt={data.name} style={{ width: '100px', height: 'auto' }} />;
    }
    return null;
  };

  const columns = [
    { key: 'name', label: 'Category Name' },
    { key: 'description', label: 'Description' },
    { key: 'imageData', label: 'Image', render: renderImage }
  ];

  const handleEdit = (id, cat) => {
    setCategoryId(cat._id);
  };

  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-gray-800 font-bold'>جميع الفئات</h3>
        </div>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a category'
        >
          <a
            className='btn btn-sm btn-info text-white fw-bold p-2'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_add_category'
          >
            <FontAwesomeIcon icon={faPlus} className='px-1' />
            إضافة فئة جديدة
          </a>
        </div>
      </div>

      <Table
        data={categories}
        columns={columns}
        idKey='_id'
        onDelete={handleDelete}
        onEdit={handleEdit}
        modalTarget='#kt_modal_edit_category'
      />
    </div>
  );
}
