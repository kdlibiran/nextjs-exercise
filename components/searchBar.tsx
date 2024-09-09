import Image from "next/image";

interface SearchBarProps {
    searchTerm: string;
    searchRecipes: (searchTerm: string) => void;
}

export default function SearchBar({searchTerm, searchRecipes}: SearchBarProps) {
    return (
        <div className="relative flex items-center w-full max-w-md">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => searchRecipes(e.target.value)}
                placeholder="Search recipes..."
                className="pl-10 pr-4 py-2 border rounded-full w-full"
            />
            <Image
                src="/icons/search.svg"
                alt="Search"
                className="absolute left-3 w-5 h-5 text-gray-400"
                height={20}
                width={20}
            />
        </div>
    )
}