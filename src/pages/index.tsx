import Image from "next/image";
import styles from "../app/page.module.css";
import SignInForm from "@/components/home/signInForm";
import SideBar from "@/components/home/sidebar";
import React, { useState } from 'react';
import LoginForm from "@/components/home/loginForm";
export default function Index() {
  const [isAccountHolder, setIsAccountHolder] =  useState<boolean>(true)
  return (
    <main className={styles.main}>
      <div className="container text-center">
        <div className="row">
        <SideBar />
       {isAccountHolder ?  <SignInForm userExist={setIsAccountHolder} /> : <LoginForm userExist={setIsAccountHolder} />}
        </div>
      </div>
    </main>
  );
}
