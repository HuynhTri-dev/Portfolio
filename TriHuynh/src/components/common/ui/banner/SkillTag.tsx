// Helper Components for "Game Tags"
export const SkillTag = ({ name, level }: { name: string; level?: string }) => (
  <div className="relative group cursor-default">
    <div className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-secondary/30 rounded-lg shadow-sm group-hover:bg-secondary/10 transition-colors">
      <span className="font-bold text-gray-700">{name}</span>
      {level && (
        <span className="ml-1 text-xs font-extrabold text-primary bg-secondary/30 w-5 h-5 flex items-center justify-center rounded">
          {level}
        </span>
      )}
    </div>
  </div>
);
