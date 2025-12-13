import {
  BatteryWarning,
  User,
  AlertTriangle,
  Activity,
  Briefcase,
} from "lucide-react";

export default function TerminalProfile() {
  return (
    <section className="py-10 border-b border-gray-700">
      <h2 className="text-xl md:text-2xl font-mono text-[var(--dev-text)] border-l-4 border-[var(--dev-accent)] pl-4 mb-8 uppercase tracking-wider">
        &gt;_ sudo cat benh_an.txt
      </h2>

      <div className="bg-black/60 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden font-mono text-sm md:text-base border border-white/10">
        <div className="bg-white/5 p-3 flex gap-2 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <div className="p-6 text-green-500 space-y-4">
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 mt-1 shrink-0" />
            <p>
              <span className="font-bold text-[var(--dev-text)]">Subject:</span>{" "}
              Full-stack Developer (Stack gì cũng biết, trừ tiền).
            </p>
          </div>

          <div className="flex items-start gap-3">
            <BatteryWarning className="w-5 h-5 mt-1 shrink-0 text-[var(--dev-danger)]" />
            <p>
              <span className="font-bold text-[var(--dev-text)]">Status:</span>{" "}
              <span className="text-[var(--dev-danger)] font-bold">
                CRITICAL LOW BATTERY
              </span>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Activity className="w-5 h-5 mt-1 shrink-0" />
            <div>
              <p className="font-bold text-[var(--dev-text)] mb-1">
                Triệu chứng:
              </p>
              <ul className="list-none pl-4 space-y-1 text-green-400/90">
                <li>- Đau lưng mãn tính (Senior Back Pain)</li>
                <li>- Mắt thâm quầng (Panda Eye Mode)</li>
                <li>- Nồng độ Caffein trong máu &gt; 90%</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 mt-1 shrink-0" />
            <p>
              <span className="font-bold text-[var(--dev-text)]">
                Tài sản hiện có:
              </span>{" "}
              01 Laptop quạt kêu như trực thăng, 01 bàn phím liệt nút Ctrl.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800/50 flex items-start gap-3 animate-pulse">
            <AlertTriangle className="w-5 h-5 mt-1 shrink-0 text-[var(--dev-primary)]" />
            <p className="text-[var(--dev-text)]">
              <span className="text-[var(--dev-primary)] font-bold">
                System Alert:
              </span>{" "}
              Cần nạp tiền ngay lập tức để duy trì server chạy bằng cơm này.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
