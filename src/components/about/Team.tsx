import { useEffect, useState } from 'react';
import face from '../../assets/face.jpg'; // Default image placeholder


interface Member {
  id: number;
  image: string;
  name: string;
  role: string;
  testimony: string;
}

const data: Member[] = [
  {
    "id": 1,
    "image": face,
    "name": "John Doe",
    "role": "CEO",
    "testimony": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed justo nec risus fermentum consequat."
  },
  {
    "id": 2,
    "image": face,
    "name": "Jane Smith",
    "role": "Marketing Manager",
    "testimony": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    "id": 3,
    "image": face,
    "name": "Alice Johnson",
    "role": "Software Engineer",
    "testimony": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },
  {
    "id": 4,
    "image": face,
    "name": "Michael Brown",
    "role": "Financial Analyst",
    "testimony": "Maecenas vehicula arcu vel urna interdum, vel egestas nisi gravida. In non risus fringilla, tempus mauris vel, dictum elit."
  },
  {
    "id": 5,
    "image": face,
    "name": "Emily Wilson",
    "role": "UX Designer",
    "testimony": "Fusce ut nulla nec ligula vestibulum ullamcorper. Integer vestibulum diam quis tortor placerat, sit amet consectetur risus tristique."
  },
  {
    "id": 6,
    "image": face,
    "name": "David Lee",
    "role": "Project Manager",
    "testimony": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin sed enim ac enim tincidunt ullamcorper."
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  useEffect(() => {
    setSelectedMember(data[0]); // Set the first element as selected by default
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
  };

  // Divide data into two arrays
  const topMembers = data.slice(0, 3);
  const bottomMembers = data.slice(3);

  return (
    <div className='py-10 px-2 md:px-4 lg:px-10 xl:px-16'>
      <p className='text-gray-800 text-[30px] md:text-[35px] lg:text-[40px] text-center font-extrabold'>Meet Our Team</p>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
            <div>
                {selectedMember && (
                  <div className="h-full min-h-[300px]  flex flex-col justify-center items-center max-w-[340px] bg-secondary py-3 text-gray-800 px-3 rounded-xl">
                    <img src={selectedMember.image} alt={selectedMember.name} className='h-[70px] w-[70px] rounded-full'/>
                    <p className='text-[20px] font-bold text-gray-800'>{selectedMember.name}</p>
                    <p className='text-[20px] font-bold text-green-500'>{selectedMember.role}</p>
                    <p className='text-justify'>{selectedMember.testimony}</p>
                  </div>
                )}
            </div>
            <div>
                <div className='flex gap-3 py-2'>
                  {/* Render top three members */}
                  {topMembers.map(member => (
                    <div 
                      key={member.id}
                      className={`hexagon-container ${selectedMember && selectedMember.id === member.id ? 'selected' : ''}`}
                      onClick={() => handleMemberClick(member)}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className='hexagon-image'
                      />
                    </div>
                  ))}
                </div>
                <div className='flex gap-3 py-2 lg:-ml-20'>
                  {/* Render bottom three members */}
                  {bottomMembers.map(member => (
                    <div 
                      key={member.id}
                      className={`hexagon-container ${selectedMember && selectedMember.id === member.id ? 'selected' : ''}`}
                      onClick={() => handleMemberClick(member)}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className='hexagon-image'
                      />
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team;
