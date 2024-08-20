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
          className="bg-white border-base border py-2 px-4 rounded-lg shadow-md my-6"
          id="transaction-card"
        >
          <div>
            <div className="my-2 flex justify-between items-center">
              <div>
                {/* <p className="text-gray text-sm">with</p> */}
                <div className="flex items-center gap-2 my-1">
                  <Image
                    src="https://placehold.co/30.jpg"
                    alt="icon"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="font-medium text-lg">{user.name}</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="my-2 flex justify-between items-center">
              <div>
                <p className="text-gray text-sm">booking id</p>
                <p className="font-medium">{user.address.zipcode}</p>
              </div>
              <div>
                <p className="text-gray text-sm">create at</p>
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
