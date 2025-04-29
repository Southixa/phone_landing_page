"use client"

import Link from 'next/link';
import '../styles/not-found.css';

export default function NotFound() {
  return (
    <div className="container">
      <div className="boo-wrapper">
        <div className="boo">
          <div className="face"></div>
        </div>
        <div className="shadow"></div>

        <h1>Whoops!</h1>
        <p>
          We couldn&apos;t find the page you
          <br />
          were looking for.
        </p>
        <Link href="/">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded mt-8 cursor-pointer">
            ກັບໜ້າຫຼັກ
          </button>
        </Link>
      </div>
    </div>
  );
} 