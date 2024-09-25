import React from 'react';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Table = ({ data = [], columns, idKey, onDelete, onEdit, modalTarget }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-row-bordered border table-striped align-middle gs-0 gy-4'>
        <thead>
          <tr className='fw-bold text-muted text-center bg-light-info '>
            <td>
              <div className='form-check form-check-sm form-check-custom form-check-solid'>
                <input className='form-check-input widget-9-check mx-2' type='checkbox' value='select-all' />
              </div>
            </td>
            <th className='min-w-50px'>Actions</th>
            {columns.map((column) => (
              <th key={column.key} className='ps-4 min-w-150px'>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item[idKey]} className='text-center'>
              <td>
                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input className='form-check-input widget-9-check mx-2' type='checkbox' value={item[idKey]} />
                </div>
              </td>
              <td>
                <div className='d-flex justify-content-end'>
                  <div
                    className='card-toolbar'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    data-bs-trigger='hover'
                    title='Click to edit'
                  >
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-info btn-sm me-1'
                      onClick={(e) => { e.preventDefault(); onEdit && onEdit(item[idKey], item); }}
                      data-bs-toggle='modal'
                      data-bs-target={modalTarget}
                    >
                      <FontAwesomeIcon icon={faPencil} />
                    </a>
                  </div>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-info btn-sm'
                    onClick={(e) => { e.preventDefault(); onDelete && onDelete(item[idKey]); }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </a>
                </div>
              </td>
              {columns.map((column) => (
                <td key={`${item[idKey]}-${column.key}`} className='text-gray-900 fw-bold fs-6'>
                  {column.render ? column.render(item) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
