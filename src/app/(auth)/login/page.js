"use client";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username) alert("email is empty");
    if (!password) alert("password is empty");

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      });

      const { isAuth } = await response.json();

      if (isAuth) {
        console.log("isAuth", isAuth);
        localStorage.setItem("isAuth", isAuth);
        router.replace("/dashboard");
      } else {
        console.log("isAuth", isAuth);

        console.error("Login failed");
      }
    } catch (error) {
      console.log("isAuth", isAuth);

      console.error("Error during login:");
    }
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth) {
      router.replace("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-[100vh] w-full bg-background overflow-hidden relative">
      <Image
        fill
        src="/images/login-bg.png"
        alt="Image"
        className="object-cover -z-[1]"
      />
      <MaxWidthWrapper
        className={
          "h-full flex flex-col sm:flex-row items-center justify-center"
        }
      >
        <div className="relative h-full flex-1 shrink-0 sm:flex flex-col  items-center justify-center hidden">
          <AspectRatio ratio={16 / 10} className="flex justify-center">
            <Image
              width={321}
              height={321}
              src="/svg/hr-img.svg"
              alt="Image"
              className="object-contain"
            />
          </AspectRatio>
          <div className="max-w-[508px] -mt-3">
            <TypographyH1>
              <span className="text-[#3F4254]">The Ultimate </span>
              <span className="text-[#29A095]">HR Management Solution</span>
            </TypographyH1>

            <p
              className={cn(
                "leading-[26.5px] text-[12px] text-[#7E8299] font-medium text-center mt-3 hidden sm:block"
              )}
            >
              At SourceCode, we have a reliable, secure and adaptable HR
              management built from the ground up.We are determined to help our
              employees to give their best efforts every day to achieve the
              goals of their job.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "flex-1 h-full shrink-0 flex  w-full justify-center mt-10 sm:mt-0 sm:items-center items-start"
          )}
        >
          {/* login Form */}
          <div className="w-full max-w-[513px] h-[646px] sm:gradient-border p-5 py-12 sm:p-[50px] flex flex-col items-center">
            <Icons.logo />

            <p className="text-sm mt-10">Log in to start your session</p>

            <div className="w-full flex flex-col gap-7 mt-10">
              <Input
                placeholder={"Employee email"}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder={"Password"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="w-full mt-2" onClick={handleLogin}>
                LOG IN
              </Button>
            </div>

            <div className="mt-9">
              <Icons.mainLogo />
            </div>

            <p className="text-[13px] mt-10 text-[#181C32]">
              © 2024 MegaHCM. All Rights Reserved
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Login;
