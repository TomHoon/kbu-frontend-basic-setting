"use client"

import { useEffect } from "react";
import { useUserStore } from "../store/UserStore"
import { baseAPi } from "../lib/baseApi";

export default function Login() {

  const setUser = useUserStore(state => state.setUser);
  const setAccessToken = useUserStore(state => state.setAccessToken);
  const accessToken = useUserStore(state => state.accessToken);

  useEffect(() => {
    console.log("accessToken ", accessToken)
  }, [accessToken]);


  const goLogin = async () => {
    const res = await baseAPi.post("/employees/login", {
      email: "hajin@naver.com",
      password: "1234"
    })

    const data = res.data.data;
    setAccessToken(data?.accessToken)
    console.log(data)
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6">
      <h1 className="mb-6 text-center text-2xl font-bold">
        로그인
      </h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="아이디"
          className="w-full rounded border px-3 py-2"
        />

        <input
          type="password"
          placeholder="비밀번호"
          className="w-full rounded border px-3 py-2"
        />

        <button className="w-full rounded bg-blue-600 py-2 text-white cursor-pointer" onClick={() => {
          goLogin();
        }}>
          로그인
        </button>
      </div>
    </div>
  )

}