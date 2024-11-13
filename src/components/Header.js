import React from "react";

export function Header() {
    return (
        <div className="flex text-right hover:colors-pink-600 bg-gradient-to-tr p-8 text-6xl font-bold  underline-offset-8 underline decoration-purple-600 text-white">
        <a className="hover:cursor-pointer" href="/home">Nory Challenge:</a>
      </div>
    );
};

export default Header();