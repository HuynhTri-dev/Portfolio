import { useRef } from 'react';
import { motion } from 'framer-motion';
import TerminalProfile from '../components/donate/TerminalProfile';
import ExpenseChart from '../components/donate/ExpenseChart';
import DonationPackages from '../components/donate/DonationPackages';
import QRSection from '../components/donate/QRSection';
import '../style/identity.css'; // Ensure vars are available

export default function DonatePage() {
    const donateSectionRef = useRef<HTMLElement>(null);

    const handleDonate = (level: string) => {
        const messages = [
            "Đang kết nối tới ví của bạn...",
            "Đang tải nhân phẩm...",
            "Phát hiện đại gia! Đang mở app ngân hàng...",
            "Cảm ơn sếp! Bug tự nhiên biến mất!"
        ];

        // Simulate the playful alert from the original idea
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        // Using simple alert to match the "cợt nhả" vibe of the original script, 
        // or we could use a toast. Let's stick to the spirit of the request.
        alert(`${randomMsg}\n(Vui lòng quét QR ở dưới để hoàn tất quy trình nuôi dev)`);

        // Scroll to QR section
        const qrElement = document.getElementById('qr-section');
        if (qrElement) {
            qrElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[var(--dev-bg)] text-[var(--dev-text)] font-mono selection:bg-[var(--dev-primary)] selection:text-black">

            {/* Header */}
            <header className="text-center py-20 px-5 border-b-2 border-dashed border-[var(--dev-primary)]">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="text-6xl mb-6"
                    >
                        ☕ 💻 🆘
                    </motion.div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        <span className="text-[var(--dev-primary)]">QUỸ BẢO TỒN DEV</span> <br />
                        <span className="relative inline-block">
                            SẮP TUYỆT CHỦNG
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
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

            <main className="container mx-auto max-w-5xl px-5 py-10 space-y-20">

                {/* Terminal Profile */}
                <section>
                    <TerminalProfile />
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
            <footer className="text-center py-10 text-gray-500 text-sm border-t border-gray-800 mt-10">
                <p className="mb-2">Website này được code bằng mồ hôi, nước mắt và rất nhiều StackOverflow.</p>
                <p>&copy; {new Date().getFullYear()} Một Dev Nghèo. All bugs reserved.</p>
            </footer>
        </div>
    );
}
