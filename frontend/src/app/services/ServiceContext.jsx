import {useState , useEffect , useContext , createContext } from 'react';
// import axios from '../../api/axios'
import useAxiosPrivate from '../../app/hooks/useAxiosPrivate';
import { useNavigate , useLocation } from 'react-router-dom';


export const ServiceContext = createContext();

export const useService = () => {
    const context = useContext(ServiceContext);

    if (!context) {
        throw new Error('useSrvice must be used within a ServiceProvider');
      }
      return context;
}
export const ServiceProvider = ({children}) => {
        const axiosPrivate = useAxiosPrivate();

        const [services , setServices] = useState([]);
        const [serviceId , setServiceId] = useState();

        const navigate = useNavigate();
        const location = useLocation();

       
        
        useEffect(() => {
           const fetchData = async () => {
            try {
                const response = await axiosPrivate.get('/services');
                setServices(response.data);
                console.log(response.data)
            } catch (err) {
                console.error('error while fetching data ',err)
            }
           }
           fetchData();
        } , [])

       
    const handleDelete = async (id) => {
        try {
            await axiosPrivate.delete('/services', { data: { id: id } });
            setServices(prevServices => prevServices.filter(service => service._id !== id));
        } catch (err) {
            console.error('Error while deleting category:', err);
        }
    }


    return (
        <ServiceContext.Provider value={{ serviceId , setServiceId , services , setServices, handleDelete }}>
            {children}
        </ServiceContext.Provider>
    )
}