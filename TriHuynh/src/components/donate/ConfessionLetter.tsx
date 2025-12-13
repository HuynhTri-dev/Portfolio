import { Quote, HeartHandshake } from "lucide-react";
import toolImg from "../../assets/tool.png";

export default function ConfessionLetter() {
  return (
    <section className="bg-[#1E293B]/40 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/10 shadow-xl max-w-3xl mx-auto relative overflow-hidden group hover:border-[var(--dev-primary)]/30 transition-colors duration-500">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[var(--dev-primary)] rounded-full opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-[var(--dev-danger)] rounded-full opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"></div>

      <div className="flex items-center gap-3 mb-6 text-[var(--dev-primary)]">
        <Quote className="w-8 h-8 rotate-180" />
        <h2 className="text-2xl font-bold uppercase tracking-wider">
          Thư Ngỏ Kêu Gọi Đồng Bào
        </h2>
      </div>

      <div className="space-y-4 text-gray-300 leading-relaxed font-sans text-lg">
        <p>
          <span className="font-bold text-white">
            Thưa các mạnh thường quân, các shark, và các anh em thiện lành.
          </span>
        </p>

        <p>
          Tôi là một Dev. Vâng, nghề mà mọi người nghĩ là lương nghìn đô, ngồi
          máy lạnh. Nhưng thực tế là ngồi gãy lưng, lương thì đổ vào mua phím cơ
          và thuốc nhỏ mắt.
        </p>

        <p>
          Dự án{" "}
          <span className="text-[var(--dev-accent)] font-bold">"Nuôi Dev"</span>{" "}
          này ra đời không phải vì tôi lười làm (dù đúng là có lười), mà vì đam
          mê công nghệ quá tốn kém. Tôi cần nâng cấp RAM để chạy các công cụ{" "}
          <img
            src={toolImg}
            alt="Tool Icon"
            className="inline-block w-12 h-12 align-text-bottom rounded-md"
          />
          , tôi cần màn hình 4K để soi bug, và quan trọng nhất:{" "}
          <span className="italic text-white">
            Tôi cần cà phê để chuyển hóa thành code.
          </span>
        </p>

        <div className="bg-black/30 p-6 rounded-xl border-l-4 border-[var(--dev-danger)] my-6">
          <h3 className="font-bold text-[var(--dev-danger)] mb-2 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5" /> CAM KẾT:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Tiền chỉ dùng mua đồ công nghệ và nạp năng lượng (cafe/đồ ăn).
              <span className="text-gray-500 italic ml-1">
                Tuyệt đối không dùng để lấy vợ (vì đã ai thèm lấy đâu).
              </span>
            </li>
            <li>
              Sao kê minh bạch: Sẽ chụp ảnh ly cà phê đã mua up lên story (khi
              nào nhớ).
            </li>
          </ul>
        </div>

        <p className="font-medium text-white italic text-center text-xl mt-8">
          "Hãy cứu lấy tâm hồn cằn cỗi này bằng một tiếng 'Ting ting'. Mọi sự
          đóng góp của quý vị đều được convert thành dòng code sạch (Clean
          Code)."
        </p>
      </div>
    </section>
  );
}
