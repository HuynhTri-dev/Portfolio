import { Coffee, Keyboard, Rocket, Star } from 'lucide-react';

interface DonationPackagesProps {
    onDonate: (level: string) => void;
}

export default function DonationPackages({ onDonate }: DonationPackagesProps) {
    return (
        <section className="py-10 border-b border-gray-700">
            <h2 className="text-xl md:text-2xl font-mono text-[var(--dev-text)] border-l-4 border-[var(--dev-accent)] pl-4 mb-8 uppercase tracking-wider">
                &gt;_ npm install donate
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Junior Support */}
                <div className="bg-[var(--dev-card-bg)] p-6 rounded-xl border border-gray-700 hover:-translate-y-2 hover:border-[var(--dev-primary)] transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-4">
                        <Coffee className="w-6 h-6 text-[var(--dev-accent)]" />
                        <h3 className="text-xl font-bold text-[var(--dev-text)]">Junior Support</h3>
                    </div>
                    <div className="text-2xl font-bold text-[var(--dev-accent)] mb-4">20k - 50k</div>
                    <p className="text-gray-400 mb-6 min-h-[48px]">Giúp Dev tỉnh táo thêm 2 giờ. Bạn nhận được một lời cảm ơn thầm lặng trong git commit log.</p>
                    <button
                        onClick={() => onDonate('Junior')}
                        className="w-full py-3 bg-[var(--dev-danger)] text-white font-bold rounded-lg hover:bg-rose-600 hover:shadow-[0_0_15px_rgba(244,63,94,0.5)] transition-all flex items-center justify-center gap-2"
                    >
                        Mời Ly Cà Phê
                    </button>
                </div>

                {/* Senior Sponsor */}
                <div className="bg-[var(--dev-card-bg)] p-6 rounded-xl border border-gray-700 hover:-translate-y-2 hover:border-[var(--dev-primary)] transition-all duration-300 relative group">
                    <div className="absolute -top-3 -right-3 bg-[var(--dev-accent)] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-black" /> Best Seller
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <Keyboard className="w-6 h-6 text-[var(--dev-accent)]" />
                        <h3 className="text-xl font-bold text-[var(--dev-text)]">Senior Sponsor</h3>
                    </div>
                    <div className="text-2xl font-bold text-[var(--dev-accent)] mb-4">100k - 200k</div>
                    <p className="text-gray-400 mb-6 min-h-[48px]">Đóng góp quỹ mua Switch bàn phím. Giúp Dev gõ code nhanh hơn, fix bug lẹ hơn (hy vọng thế).</p>
                    <button
                        onClick={() => onDonate('Senior')}
                        className="w-full py-3 bg-[var(--dev-danger)] text-white font-bold rounded-lg hover:bg-rose-600 hover:shadow-[0_0_15px_rgba(244,63,94,0.5)] transition-all flex items-center justify-center gap-2"
                    >
                        Tài Trợ Bàn Phím
                    </button>
                </div>

                {/* Angel Investor */}
                <div className="bg-[var(--dev-card-bg)] p-6 rounded-xl border border-gray-700 hover:-translate-y-2 hover:border-[var(--dev-primary)] transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-4">
                        <Rocket className="w-6 h-6 text-[var(--dev-accent)]" />
                        <h3 className="text-xl font-bold text-[var(--dev-text)]">Angel Investor</h3>
                    </div>
                    <div className="text-2xl font-bold text-[var(--dev-accent)] mb-4">500k ++</div>
                    <p className="text-gray-400 mb-6 min-h-[48px]">Bạn là ánh sáng của Đảng! Số tiền này dùng để mua tên miền hoặc trả tiền AWS lỡ quên tắt instance.</p>
                    <button
                        onClick={() => onDonate('Boss')}
                        className="w-full py-3 bg-[var(--dev-danger)] text-white font-bold rounded-lg hover:bg-rose-600 hover:shadow-[0_0_15px_rgba(244,63,94,0.5)] transition-all flex items-center justify-center gap-2"
                    >
                        Nuôi Luôn Dev
                    </button>
                </div>
            </div>
        </section>
    );
}
