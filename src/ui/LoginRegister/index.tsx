
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/clerk-react";
function Login() {
  return (
    <>
      <div className="flex items-center ">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="border hover:bg-transparent hover:text-orange duration-500 hover:border-orange p-3 text-white text-[1.4rem] font-semibold">Sign in</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="px-9">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: " w-[55px] h-[55px]",
                    },
                  }}
                ></UserButton>
              </div>
            </SignedIn>
          </div>
    </>
  )
}

export default Login
