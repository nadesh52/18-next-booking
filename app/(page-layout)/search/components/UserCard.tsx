import Image from "next/image";
import React from "react";

interface UserProps {
  id: number;
  name: string;
}

const UserCard = (props: UserProps) => {
  return (
    <div className="bg-slate-200 flex h-[180px] w-[120px] flex-col rounded-lg cursor-pointer">
      <div className="w-full overflow-hidden text-ellipsis p-1">
        <span>{props.name}</span>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <Image src="/assets/icons/8.png" width={512} height={512} alt="icon" className="w-[70px] h-[70px]" />
      </div>
    </div>
  );
};

export default UserCard;
