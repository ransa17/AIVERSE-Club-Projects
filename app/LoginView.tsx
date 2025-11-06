import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
export default  function LoginView(){
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <Card className="min-w-xs text-center">
                <div>
                <h1 className="text-2xl font-bold"> Welcome Back</h1>
                <p> please login to continue</p>
                <p>Start building the Dashboard and <br></br> landing page don't waste time </p>
                </div>
                <div>
                    <form action = {async ()=>{
                        'use server';
                        await signIn('google');
                    }}>
                         <Button  type="submit"> Login with google</Button>

                    </form>
                </div>
            </Card>
        </div>
    );
}