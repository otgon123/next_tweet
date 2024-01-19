"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/Input";
import Link from "next/link";
import { useState } from "react";

const RegistPage = () => {

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const regist = () => {
        console.log(name, email, password)
    }

    return (
        <div className="mx-auto w-1/3">
            <h1 className="flex text-2xl justify-center font-bold">
                <FaUser className="mt-1 me-3" />
                Register
            </h1>

            <div>
                <Input type="name" placeholder="Name" onChange={setName} />
                <Input type="email" placeholder="Email" onChange={setEmail}/>
                <Input type="password" placeholder="Password" onChange={setPassword}/>
            </div>

            <div>
                <button className="
                w-full bg-black
                text-white hover:bg-gray-800
                py-2 px-4 my-3
                rounded-lg" onClick={regist}>
                    Sign up
                </button>

                <Link
                    href="/auth/regist"
                    className="
                flex justify-center
                w-full bg-gray-200
                text-gray-600 
                hover:bg-gray-300
                py-2 px-4 my-3
                rounded-lg
                ">
                    Sign in
                </Link>
            </div>
        </div>
    );
}

export default RegistPage;