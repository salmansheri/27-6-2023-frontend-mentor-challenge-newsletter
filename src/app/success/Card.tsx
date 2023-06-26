"use client";

import Image from "next/image";
import { FC, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const handleClick = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="bg-website-white h-screen lg:h-auto lg:w-[40%] p-14 lg:rounded-3xl grid lg:gap-5">
      <Image
        src="/assets/images/icon-list.svg"
        alt="list"
        width={50}
        height={50}
      />
      <h1 className="text-5xl font-700">Thanks for subscribing!</h1>
      <p className="text-charcoal-grey">
        A confirmation email has been sent to <strong>{email}</strong>. Please open it and click
        the button inside to confirm your subscription
      </p>
      <button
        onClick={handleClick}
        className="bg-dark-slate-grey text-website-white h-12 w-full inline-flex items-center justify-center shadow rounded-md  mt-4 hover:bg-gradient-to-r from-secondary to-primary"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default Card;
