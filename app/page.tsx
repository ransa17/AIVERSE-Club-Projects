import LoginView from "@/app/LoginView";
import {auth} from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
     {user &&(
      <div>
        <header className="">
          <Link href="">
             PriceTracker
          </Link>
        </header>

      </div>
     )}
    {!user &&(
       <LoginView/>
    )}
   
    </div>
  );
}
