"use client";
import { useRouter } from "next/navigation";
import Home from "../page";

export default function NavBar() {
    const router = useRouter();
    const handleInicio = () => {
        router.push("/")
    }

    return (
        <div className="navbar bg-base-100 bg-white">
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Mercado Sem Desperdício</a>
            </div>
            <div className="navbar-end">
                <a className="btn" onClick={handleInicio}>Inicio</a>
            </div>
        </div>
    );
}
