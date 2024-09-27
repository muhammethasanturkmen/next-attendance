"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ClassData from "./data.json";
import Link from "next/link";
import Head from 'next/head';
import Yoklama from "./yoklama/page";

export default function Home() {

  return (
    <>
      <Yoklama />
    </>
  );
}
