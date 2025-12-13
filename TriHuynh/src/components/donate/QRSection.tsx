import { useState, useEffect } from "react";
import { QrCode, Heart, Coffee } from "lucide-react";
import qrCodeImg from "../../assets/qr_code.png";

interface Donation {
  id: string | number;
  name: string;
  amount: number;
  message: string;
  createdAt: string;
}

// Mock data - Replace this with real API call later
const MOCK_DONATIONS: Donation[] = [
  {
    id: 1,
    name: "Người bí ẩn",
    amount: 50000,
    message: "Mời bạn ly cafe ☕",
    createdAt: "Vừa xong",
  },
  {
    id: 2,
    name: "Dev dạo",
    amount: 20000,
    message: "Bug ít thôi nhé! 🐛",
    createdAt: "1 giờ trước",
  },
  {
    id: 3,
    name: "Fan cứng",
    amount: 100000,
    message: "Hay quá bạn ơi 🔥",
    createdAt: "2 giờ trước",
  },
];

export default function QRSection() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // TODO: Integrate SePay Webhooks here
    // 1. Create an API endpoint (e.g., using Cloudflare Workers, Vercel Functions, or your own backend)
    // 2. Configure SePay to send webhooks to that endpoint
    // 3. Fetch the list of transactions from your database here

    // For now, loading mock data
    setDonations(MOCK_DONATIONS);
    setTotalAmount(MOCK_DONATIONS.reduce((acc, curr) => acc + curr.amount, 0));
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <section
      id="qr-section"
      className="py-10 mt-10 bg-[#1E293B]/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--dev-primary)] mb-8 flex items-center justify-center gap-3 text-center">
        <QrCode className="w-8 h-8" /> QUÉT NGAY TÍCH ĐỨC 4.0
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column: QR Code */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-2xl shadow-lg border-2 border-white/20 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={qrCodeImg}
              alt="QR Code Transfer"
              className="relative w-64 h-64 md:w-72 md:h-72 object-contain rounded-lg"
            />
          </div>

          <p className="mt-6 text-gray-300 font-medium text-center max-w-xs">
            Mọi sự ủng hộ của bạn đều là động lực to lớn để mình ra thêm nhiều
            content chất lượng! ❤️
          </p>

          <p className="mt-4 text-[var(--dev-danger)] font-bold text-lg animate-pulse bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
            Nội dung: "Cuu Dev + Lời nhắn"
          </p>
        </div>

        {/* Right Column: Donor List & Total */}
        <div className="bg-black/20 rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full min-h-[400px]">
          {/* Header Stats */}
          <div className="p-6 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border-b border-white/5">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">
              Tổng Donate Đã Nhận
            </p>
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 flex items-center gap-2">
              {formatCurrency(totalAmount)}
              <Heart
                className="w-6 h-6 text-pink-500 animate-bounce"
                fill="currentColor"
              />
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar max-h-[400px]">
            {donations.length > 0 ? (
              donations.map((d) => (
                <div
                  key={d.id}
                  className="flex items-center gap-4 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors border border-white/5"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shrink-0">
                    {d.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-white truncate mr-2">
                        {d.name}
                      </h4>
                      <span className="text-emerald-400 font-bold text-sm">
                        {formatCurrency(d.amount)}
                      </span>
                    </div>
                    {d.message && (
                      <p className="text-gray-400 text-sm truncate flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-gray-500 shrink-0"></span>
                        {d.message}
                      </p>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 whitespace-nowrap self-start mt-1">
                    {d.createdAt}
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-2 p-8 text-center">
                <Coffee className="w-10 h-10 mb-2 opacity-50" />
                <p>Chưa có ai donate hôm nay.</p>
                <p className="text-sm">Hãy là người đầu tiên nhé! 😉</p>
              </div>
            )}
          </div>

          <div className="p-3 text-center text-xs text-gray-600 bg-black/20 border-t border-white/5">
            Updated realtime via SePay
          </div>
        </div>
      </div>
    </section>
  );
}
