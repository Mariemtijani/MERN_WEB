import {useState , useEffect , useContext , createContext } from 'react';
import axios from '../../api/axios'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useNavigate , useLocation } from 'react-router-dom';


export const CategoryContext = createContext();

export const useCategory = () => {
    const context = useContext(CategoryContext);

    if (!context) {
        throw new Error('useZone must be used within a ZoneProvider');
      }
      return context;
}
export const CategoryProvider = ({children}) => {
        const axiosPrivate = useAxiosPrivate();

        const [categories , setCategories] = useState([]);
        const [categoryId , setCategoryId] = useState();

        const navigate = useNavigate();
        const location = useLocation();

       
        
        useEffect(() => {
           const fetchData = async () => {
            try {
                const response = await axiosPrivate.get('/categories');
                setCategories(response.data);
                console.log(response.data)
            } catch (err) {
                console.error('error while fetching data ',err)
            }
           }
           fetchData();
        } , [])

       
    const handleDelete = async (id) => {
        try {
            await axiosPrivate.delete('/categories', { data: { id: id } });
            setCategories(prevCategories => prevCategories.filter(category => category._id !== id));
        } catch (err) {
            console.error('Error while deleting category:', err);
        }
    }
    return (
        <CategoryContext.Provider value={{ categories , setCategories , categoryId , setCategoryId, handleDelete }}>
            {children}
        </CategoryContext.Provider>
    )
}