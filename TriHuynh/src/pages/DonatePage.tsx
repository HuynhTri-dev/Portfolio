import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X } from "lucide-react";
import TerminalProfile from "../components/donate/TerminalProfile";
import ConfessionLetter from "../components/donate/ConfessionLetter";
import ExpenseChart from "../components/donate/ExpenseChart";
import DonationPackages from "../components/donate/DonationPackages";
import QRSection from "../components/donate/QRSection";
import "../style/identity.css"; // Ensure vars are available
import poorDevImg from "../assets/poor_dev.jpg";

export default function DonatePage() {
  const donateSectionRef = useRef<HTMLElement>(null);
  const [notification, setNotification] = useState<{
    name: string;
    amount: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    // Simulate Webhook receiving data
    const timer = setTimeout(() => {
      setNotification({
        name: "Elon Musk",
        amount: "30.000đ",
        message: "Donate for mars ticket 🚀",
      });
    }, 5000); // Show after 5 seconds to surprise the user

    return () => clearTimeout(timer);
  }, []);

  const handleDonate = (level: string) => {
    const messages = [
      "Đang kết nối tới ví của bạn...",
      "Đang tải nhân phẩm...",
      "Phát hiện đại gia! Đang mở app ngân hàng...",
      "Cảm ơn sếp! Bug tự nhiên biến mất!",
    ];

    // Simulate the playful alert from the original idea
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    // Using simple alert to match the "cợt nhả" vibe of the original script,
    // or we could use a toast. Let's stick to the spirit of the request.
    alert(
      `${randomMsg}\n(Vui lòng quét QR ở dưới để hoàn tất quy trình nuôi dev)`
    );

    // Scroll to QR section
    const qrElement = document.getElementById("qr-section");
    if (qrElement) {
      qrElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--dev-bg)] text-[var(--dev-text)] font-mono selection:bg-[var(--dev-primary)] selection:text-black overflow-hidden pt-12 md:pt-0">
      {/* Real-time Webhook Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-2xl border-b border-green-400"
          >
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full animate-bounce">
                  <Bell className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="font-bold flex items-center gap-2">
                    <span className="text-yellow-300">★ MỚI NHẬN:</span>
                    {notification.name} vừa donate {notification.amount}
                  </p>
                  <p className="text-xs text-green-100 italic">
                    "{notification.message}"
                  </p>
                </div>
              </div>
              <button
                onClick={() => setNotification(null)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                title="Đóng thông báo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="relative z-10 text-center py-20 px-5 border-b border-dashed border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <motion.img
            src={poorDevImg}
            alt="Poor Dev"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-64 h-64 object-cover mx-auto mb-6 rounded-md border-4 border-[var(--dev-primary)] shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          />

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-[var(--dev-primary)]">QUỸ BẢO TỒN DEV</span>{" "}
            <br />
            <span className="relative inline-block">
              SẮP TUYỆT CHỦNG
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "steps(2)",
                }}
                className="absolute -right-6 md:-right-8 top-0 text-[var(--dev-danger)]"
              >
                |
              </motion.span>
            </span>
          </h1>

          <p className="text-[var(--dev-accent)] text-lg md:text-xl italic mt-6">
            "Cứu một mạng Dev còn hơn xây bảy tòa tháp Google"
          </p>
        </div>
      </header>

      <main className="relative z-10 container mx-auto max-w-5xl px-5 py-10 space-y-20">
        {/* Terminal Profile */}
        <section>
          <TerminalProfile />
        </section>

        {/* Confession Letter */}
        <section>
          <ConfessionLetter />
        </section>

        {/* Expense Chart */}
        <section>
          <ExpenseChart />
        </section>

        {/* Donation Packages */}
        <section ref={donateSectionRef}>
          <DonationPackages onDonate={handleDonate} />
        </section>

        {/* QR Section */}
        <QRSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 text-gray-400 text-sm border-t border-white/10 mt-10 bg-black/20 backdrop-blur-sm">
        <p className="mb-2">
          Website này được code bằng mồ hôi, nước mắt và rất nhiều AI Agent.
        </p>
        <p>
          &copy; {new Date().getFullYear()} Một Dev Nghèo. All bugs reserved.
        </p>

        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">
            Cảm ơn các nhà tài trợ cho website
          </h2>
          <ul>
            <li>Gemini 3 Pro</li>
            <li>Claude Socknet</li>
            <li>Claude Opus</li>
            <li>ChatGPT</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
