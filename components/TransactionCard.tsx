import Image from "next/image";
import React, { useEffect, useState } from "react";

const TransactionCard = () => {
  const [isHide, setIsHide] = useState<any>(true);
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await res.json();
    setUsers(jsonData);
  };

  const handleShowNum = (id: any) => {
    setIsHide({
      ...isHide,
      [id]: !isHide[id],
    });
  };

  const randNum = (): number => {
    const num = Math.floor(Math.random() * 900 + 100);
    return num;
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      {users.map((user: any, i: any) => (
        <div
          key={i}
          className="bg-white py-2 px-4 rounded-lg shadow-md my-6"
          id="transaction-card"
        >
          <div>
            <div className="my-2 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-4 my-4">
                  <Image
                    src="https://placehold.co/50.jpg"
                    alt="icon"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <p className="font-medium text-xl">{user.name}</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="my-2 flex justify-between items-center">
              <div>
                <p className="text-slate-400 text">Booking ID</p>
                <p className="font-medium">{user.address.zipcode}</p>
              </div>
              <div>
                <p className="text-slate-400 text">Create At</p>
                <p className="font-medium">{user.website}</p>
              </div>
              <div>
                <button
                  className="w-fit bg-accent py-0.5 px-2 rounded text-white font-medium"
                  onClick={() => handleShowNum(user.id)}
                >
                  reveal
                </button>
                {!isHide[user.id] ? <p>SECRET</p> : <p>{randNum()}</p>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TransactionCard;
