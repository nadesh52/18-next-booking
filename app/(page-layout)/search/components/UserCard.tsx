import Image from "next/image";
import React from "react";

interface UserProps {
  id: number;
  name: string;
}

const UserCard = (props: UserProps) => {
  return (
    <div className="flex flex-col items-center mx-1">
      <div className="h-[110px]">
        <Image
          src="https://placehold.co/100x120.jpg"
          alt=""
          height={100}
          width={100}
          className="rounded-xl"
        />
      </div>
      <div className="w-[90px] box-border overflow-hidden text-ellipsis">
        <span className="text-lg">{props.name}</span>
      </div>
    </div>
  );
};

export default UserCard;
