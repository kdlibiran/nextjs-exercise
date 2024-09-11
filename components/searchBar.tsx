import Image from "next/image";
import styles from "./SearchBar.module.scss"; // Import the SCSS module

interface SearchBarProps {
    searchTerm: string;
    searchRecipes: (page: number, searchTerm: string) => void;
}

export default function SearchBar({searchTerm, searchRecipes}: SearchBarProps) {
    return (
        <div className={styles.searchBarContainer}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => searchRecipes(1, e.target.value)}
                placeholder="Search recipes..."
                className={styles.searchInput}
            />
            <Image
                src="/icons/search.svg"
                alt="Search"
                className={styles.searchIcon}
                height={20}
                width={20}
            />
        </div>
    )
}