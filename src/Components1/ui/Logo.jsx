// src/components/ui/Logo.jsx
export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        TailorPro
      </span>
    </div>
  );
}
