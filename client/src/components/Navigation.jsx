import { MapPin } from "lucide-react"

const Navigation = ({ car }) => {
    return (
        <div className="absolute top-0 w-full p-8 z-20 flex justify-between items-start 2xl:px-40">

            {/* 🧊 BRANDING & CAMERA BTNS */}
            <div className="flex flex-col gap-1">
                {/* Logo */}
                <div className="size-12 bg-zinc-900 rounded-full center-item text-white font-bold text-xl">
                    Q
                </div>
                {/* Car Name */}
                <h1 className="text-4xl lg:text-5xl font-light mt-4 tracking-tighter leading-none">
                    {car?.name}
                </h1>
                {/* Description */}
                <p className="text-zinc-500 text-sm font-medium">
                    {car?.desc}
                </p>
                {/* Camera Angles Toggler */}
                <div className="flex gap-2 mt-2">
                    {["L", "R", "F", "B"].map((pos) =>(
                        <span className={`size-10 rounded-full text-sm cursor-pointer center-item border border-zinc-400 hover:border-emerald-600 ${pos === "L" ? "bg-emerald-600 text-white border-none": ""} hover:bg-emerald-600 hover:text-white transition-all duration-200 hover:text-white`}>
                            {pos}
                        </span>
                    ))}
                </div>

            </div>
            {/* 🧊 SERVICE-OPTIONS */}
            <div>
            </div>
            {/* 🧊 LOCATION */}
            <div>
            </div>

        </div>
    )
}

export default Navigation