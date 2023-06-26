"use client";

import { FC, useCallback, useState } from "react";
import { listItems } from "@/constants";
import Image from "next/image";
import { useRouter } from 'next/navigation'; 
import IconList from "../../../public/assets/images/icon-list.svg";
import Illustration1 from "../../../public/assets/images/illustration-sign-up-desktop.svg";
import Illustration2 from "../../../public/assets/images/illustration-sign-up-mobile.svg";

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
    const router = useRouter(); 
    const [text, setText] = useState<string>(""); 
    const [error, setError] = useState<boolean>(false); 
    const validEmail = text.includes(".com"); 
    const handleClick = useCallback(() => {
       if(!validEmail) {
        setError(true); 
        return; 

       }

       setError(false); 
       router.push("/success?email=" + text); 
       


    }, [validEmail, router, text])
  return (
    <div className=" rounded-xl bg-website-white flex lg:w-[70%] h-screen lg:h-auto lg:flex-row flex-col-reverse flex-wrap lg:p-5">
      <div className="flex-1 lg:p-10 p-5 space-y-3 flex flex-col justify-center">
        <h1 className="text-5xl font-700">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on</p>

        {listItems.map((item) => (
          <ul
            key={item}
            className="flex 
                 space-x-3 items-center"
          >
            <Image src={IconList} alt={item} width={20} height={20} />
            <li>{item}</li>
          </ul>
        ))}
        <div className="grid gap-2">
            <div className="flex justify-between items-center">

          <label>Email Address</label>
          {error && (
            <span className="text-primary text-xs">Valid Email Required!*</span>
          )}
            </div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={`${error ? "bg-primary/20 border-primary": "bg-transparent border-none"} w-full h-12 border-2 rounded-md p-5  focus:outline-none focus:border-dark-slate-grey  border-solid `}
            placeholder="email@company.com"
          />
          <button
            onClick={handleClick}
         className="bg-dark-slate-grey text-website-white h-12 w-full inline-flex items-center justify-center shadow rounded-md  mt-4 hover:bg-gradient-to-r from-secondary to-primary">
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative w-full h-full">
          <Image
            src={Illustration1}
            alt=""
            fill
            className="rounded-xl hidden lg:block"
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src={Illustration2}
            alt=""
            fill
            className="rounded-xl lg:hidden block"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
