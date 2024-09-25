import React, { useState } from 'react';
import axios from '../api/axios';

const ChooseRole = ({ userId }) => {
    const [selectedRole, setSelectedRole] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleRoleSelection = (role) => {
        setSelectedRole(role);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/updateUserRole', 
                { userId, role: selectedRole },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(response.data);
            // تحويل المستخدم إلى الصفحة الرئيسية بعد تحديث الدور بنجاح
            window.location.href = '/signIn'; // التوجه إلى الصفحة الرئيسية
        } catch (err) {
            setErrMsg('فشل تحديث الدور');
        }
    };

    return (
        <div className="role-selection mt-32">
            <h2>اختر دورك</h2>
            <div className="buttons">
                <button className='bg-white shadow p-4 text-teal-600 font-bold fs-5 mx-2' onClick={() => handleRoleSelection(1984)}>حرفي</button>
                <button className='bg-white shadow p-4 text-teal-600 font-bold fs-5 mx-2' onClick={() => handleRoleSelection(2001)}>عميل</button>
            </div>
            {selectedRole && <button type="button" onClick={handleSubmit}>تأكيد</button>} {/* إظهار زر التأكيد فقط إذا تم اختيار دور */}
        </div>
    );
};

export default ChooseRole;
