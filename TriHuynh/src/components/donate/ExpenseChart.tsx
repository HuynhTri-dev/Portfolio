import { Coffee, Mouse, GraduationCap, Flame } from 'lucide-react';

export default function ExpenseChart() {
    return (
        <section className="py-10 border-b border-gray-700">
            <h2 className="text-xl md:text-2xl font-mono text-[var(--dev-text)] border-left border-l-4 border-[var(--dev-accent)] pl-4 mb-8 uppercase tracking-wider">
                &gt;_ git status (Tiền đi về đâu?)
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <div
                    className="w-[200px] h-[200px] rounded-full border-4 border-[var(--dev-card-bg)] shrink-0 shadow-lg"
                    style={{
                        background: `conic-gradient(
              var(--dev-accent) 0% 50%, 
              var(--dev-primary) 50% 80%, 
              #3B82F6 80% 99%, 
              #EF4444 99% 100%
            )`
                    }}
                ></div>

                <div className="bg-[var(--dev-card-bg)] p-6 rounded-xl border border-gray-700 shadow-xl w-full max-w-md">
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded opacity-90 block bg-[var(--dev-accent)] shrink-0"></span>
                            <div className="flex-1 text-[var(--dev-text)]">
                                <div className="flex items-center gap-2 font-bold"><Coffee className="w-4 h-4" /> 50%</div>
                                <span className="text-sm opacity-80">Cà phê / Monster / Bò húc</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded opacity-90 block bg-[var(--dev-primary)] shrink-0"></span>
                            <div className="flex-1 text-[var(--dev-text)]">
                                <div className="flex items-center gap-2 font-bold"><Mouse className="w-4 h-4" /> 30%</div>
                                <span className="text-sm opacity-80">Mua đồ công nghệ (Phím cơ, Chuột, RAM)</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded opacity-90 block bg-blue-500 shrink-0"></span>
                            <div className="flex-1 text-[var(--dev-text)]">
                                <div className="flex items-center gap-2 font-bold"><GraduationCap className="w-4 h-4" /> 19%</div>
                                <span className="text-sm opacity-80">Mua khóa học (Cam kết sẽ học... bài đầu)</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded opacity-90 block bg-red-500 shrink-0"></span>
                            <div className="flex-1 text-[var(--dev-text)]">
                                <div className="flex items-center gap-2 font-bold"><Flame className="w-4 h-4" /> 1%</div>
                                <span className="text-sm opacity-80">Mì tôm (Dự phòng khẩn cấp)</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <blockquote className="mt-8 italic border-l-4 border-gray-600 pl-4 py-2 text-gray-400 bg-gray-800/30 rounded-r">
                "Cam kết sao kê đầy đủ từng hạt đường trong ly cà phê... <span className="text-[var(--dev-danger)] font-bold">NẾU RẢNH</span>. (Lưu ý: Dev rất ít khi rảnh vì bận fix bug)."
            </blockquote>
        </section>
    );
}
