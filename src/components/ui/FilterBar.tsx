// FilterBar: renders a row of FilterTag components
import FilterTag from "./FilterTag";

type FilterBarProps = {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string) => void;
};

export default function FilterBar({ tags, activeTag, onTagClick }: FilterBarProps) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-3 py-3 mb-2 border-b border-surface/30">
      {tags.map((tag) => (
        <FilterTag key={tag} label={tag} active={activeTag === tag} onClick={() => onTagClick(tag)} />
      ))}
    </div>
  );
}
