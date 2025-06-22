// FilterBar: renders a row of FilterTag components
import FilterTag from "./FilterTag";

type FilterBarProps = {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string) => void;
};

export default function FilterBar({ tags, activeTag, onTagClick }: FilterBarProps) {
  return (
    <div className="flex gap-2 py-2">
      {tags.map((tag) => (
        <FilterTag key={tag} label={tag} active={activeTag === tag} onClick={() => onTagClick(tag)} />
      ))}
    </div>
  );
}
