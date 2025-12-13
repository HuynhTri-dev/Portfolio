import { Coffee, Mouse, GraduationCap, Flame } from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart() {
  const data = {
    labels: [
      "Cà phê / Monster / Bò húc",
      "Mua đồ công nghệ",
      "Mua khóa học",
      "Mì tôm",
    ],
    datasets: [
      {
        data: [50, 30, 19, 1],
        backgroundColor: [
          "#F59E0B", // --dev-accent
          "#10B981", // --dev-primary
          "#3B82F6", // Blue-500
          "#EF4444", // Red-500
        ],
        borderColor: ["#F59E0B", "#10B981", "#3B82F6", "#EF4444"],
        borderWidth: 0, // Clean look
        hoverOffset: 20, // Pop out effect
        borderRadius: 5, // Soft edges
        spacing: 2, // Slight gap between segments for "modern" feel
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(30, 41, 59, 0.95)",
        titleColor: "#E2E8F0",
        bodyColor: "#E2E8F0",
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function (context: any) {
            return ` ${context.label}: ${context.raw}%`;
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <section className="py-10 border-b border-gray-700">
      <h2 className="text-xl md:text-2xl font-mono text-[var(--dev-text)] border-left border-l-4 border-[var(--dev-accent)] pl-4 mb-8 uppercase tracking-wider">
        &gt;_ git status (Tiền đi về đâu?)
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Chart Container */}
        <div className="relative w-[280px] h-[280px] shrink-0">
          <Doughnut data={data} options={options} />
          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
            <span className="text-2xl font-bold text-[var(--dev-accent)] drop-shadow-md">
              Top 1
            </span>
            <span className="text-lg font-bold text-[var(--dev-text)] mt-1 opacity-90">
              Độ Liêm
            </span>
          </div>
        </div>

        {/* Legend / Details */}
        <div className="bg-[#1E293B]/40 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl w-full max-w-md hover:border-white/20 transition-colors">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full shadow-lg shadow-orange-500/20 block bg-[#F59E0B] shrink-0"></span>
              <div className="flex-1 text-[var(--dev-text)]">
                <div className="flex items-center gap-2 font-bold">
                  <Coffee className="w-4 h-4 text-[#F59E0B]" /> 50%
                </div>
                <span className="text-sm opacity-70">
                  Cà phê / Monster / Bò húc
                </span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full shadow-lg shadow-emerald-500/20 block bg-[#10B981] shrink-0"></span>
              <div className="flex-1 text-[var(--dev-text)]">
                <div className="flex items-center gap-2 font-bold">
                  <Mouse className="w-4 h-4 text-[#10B981]" /> 30%
                </div>
                <span className="text-sm opacity-70">
                  Mua đồ công nghệ (Phím cơ, Chuột, RAM)
                </span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full shadow-lg shadow-blue-500/20 block bg-[#3B82F6] shrink-0"></span>
              <div className="flex-1 text-[var(--dev-text)]">
                <div className="flex items-center gap-2 font-bold">
                  <GraduationCap className="w-4 h-4 text-[#3B82F6]" /> 19%
                </div>
                <span className="text-sm opacity-70">
                  Mua khóa học (Cam kết sẽ học... bài đầu)
                </span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full shadow-lg shadow-red-500/20 block bg-[#EF4444] shrink-0"></span>
              <div className="flex-1 text-[var(--dev-text)]">
                <div className="flex items-center gap-2 font-bold">
                  <Flame className="w-4 h-4 text-[#EF4444]" /> 1%
                </div>
                <span className="text-sm opacity-70">
                  Mì tôm (Dự phòng khẩn cấp)
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <blockquote className="mt-8 italic border-l-4 border-gray-600 pl-4 py-2 text-gray-400 bg-white/5 rounded-r backdrop-blur-sm">
        "Cam kết sao kê đầy đủ từng hạt đường trong ly cà phê...{" "}
        <span className="text-[var(--dev-danger)] font-bold">NẾU RẢNH</span>.
        (Lưu ý: Dev rất ít khi rảnh vì bận fix bug)."
        <button
          className="mt-6 px-6 py-2 bg-[var(--dev-primary)] text-gray-900 font-bold rounded-lg hover:bg-[var(--dev-accent)] transition-all transform hover:scale-105 shadow-lg active:scale-95 block w-fit"
          onClick={() =>
            alert("Tính năng đang được phát triển... (Dev đang bận fix bug)")
          }
        >
          Sao kê chi tiết
        </button>
      </blockquote>
    </section>
  );
}
