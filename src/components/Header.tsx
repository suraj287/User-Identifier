import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  const {userId} =auth()
  {console.log(userId)}
  return (
    <header className="flex items-center justify-between border-b px-8 mb-5 bg-background bg-slate-300">
    

      <div className="flex items-center justify-center h-20">
      <Link href="/">
        <Image
          src="/icon.jpeg"
          alt="logo"
          height={120}
          width={120}
          className="object-contain h-32 cursor-pointer"
        />
      </Link>
      </div>
      
        {userId?(<div>
          <UserButton/>
        </div>):(<div>
          <SignInButton afterSignInUrl="/identifier" mode="modal"/>

          </div>
        )
      }

      
    </header>
  );
}

export default Header;
