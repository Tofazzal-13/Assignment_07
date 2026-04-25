import React, { useEffect, useState } from 'react';

const useFriends = () => {
      const [allFriends, setFriends] = useState([])
        const [loading, setLoading] = useState(true)
    
        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch("/friends.json")
                const data = await res.json()
                setTimeout(() => {
    
                    setFriends(data)
                    setLoading(false)
                }, 2000);
    
            }
            fetchData()
        }, [])
    return {allFriends, loading}
};

export default useFriends;