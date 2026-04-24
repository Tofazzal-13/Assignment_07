
import { useLoaderData } from 'react-router';

const Summary = () => {
    const friends = useLoaderData()
    
    

    const totalFriends = friends.length;
    const onTrack = friends.filter(f => f.status === 'on-track').length;
    const needAttention = friends.filter(f => f.status !== 'on-track').length;
    const interactionsThisMonth = friends.filter(f => f.days_since_contact <= 60).length;

    const stats = [
        { label: 'Total Friends', value: totalFriends },
        { label: 'On Track', value: onTrack },
        { label: 'Need Attention', value: needAttention },
        { label: 'Interactions This Month', value: interactionsThisMonth },
    ];

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-16 ">
            {stats.map((item, index) => (
                <div 
                    key={index} 
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-hover hover:shadow-md"
                >
                    <h2 className="text-4xl font-bold text-[#1e293b] mb-2">
                        {item.value}
                    </h2>
                    <p className="text-sm font-semibold text-[#64748b] text-center uppercase tracking-tight">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Summary;