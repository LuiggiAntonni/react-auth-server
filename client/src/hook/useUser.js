import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchUserData } from "../services/userService";

const useUser = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [welcomeMessage, setWelcomeMessage] = useState('');
  
    const location = useLocation();
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const userData = await fetchUserData();
          setData(userData);
                    
          const queryParams = new URLSearchParams(location.search);
          if (queryParams.get('welcome') === 'true') {
            setWelcomeMessage('Congratulations, you registered!');
          }
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [location]);
  
    return { data, error, loading, welcomeMessage };
  };


  export default useUser;