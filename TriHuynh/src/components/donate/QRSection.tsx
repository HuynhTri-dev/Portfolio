import { useState } from 'react';
import { QrCode, CreditCard, Wallet } from 'lucide-react';

const BANKS = [
    { id: 'momo', name: 'Momo', icon: Wallet, color: 'text-pink-500' },
    { id: 'tpbank', name: 'TPBank', icon: CreditCard, color: 'text-purple-600' },
    { id: 'vpbank', name: 'VPBank', icon: CreditCard, color: 'text-green-600' }
];

export default function QRSection() {
    const [selectedBank, setSelectedBank] = useState(BANKS[0].id);

    // In a real app, these would be imported images
    const getQRUrl = (bankId: string) => {
        // Placeholder URLs - easy to replace with real assets later
        return `https://via.placeholder.com/300x300/1E293B/FFFFFF?text=${bankId.toUpperCase()}+QR`;
    };

    return (
        <section id="qr-section" className="py-10 mt-10 bg-[var(--dev-card-bg)] rounded-3xl p-8 text-center shadow-2xl border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--dev-primary)] mb-4 flex items-center justify-center gap-3">
                <QrCode className="w-8 h-8" /> QUÉT NGAY TÍCH ĐỨC 4.0
            </h2>

            <p className="text-gray-400 mb-8">Mọi giao dịch đều được encrypt bằng lòng biết ơn vô hạn.</p>

            <div className="flex justify-center mb-8">
                <div className="relative inline-block w-full max-w-xs">
                    <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="block w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--dev-primary)] cursor-pointer"
                    >
                        {BANKS.map((bank) => (
                            <option key={bank.id} value={bank.id}>
                                {bank.name}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl mx-auto w-fit max-w-full">
                <img
                    src={getQRUrl(selectedBank)}
                    alt={`QR Code ${selectedBank}`}
                    className="w-64 h-64 object-contain rounded-lg border-2 border-gray-100"
                />
                <p className="mt-4 text-gray-900 font-bold uppercase tracking-wider text-sm">
                    {BANKS.find(b => b.id === selectedBank)?.name} QR Code
                </p>
            </div>

            <p className="mt-8 text-[var(--dev-danger)] font-bold text-lg animate-pulse">
                Nội dung CK: "Cuu Dev + Lời nhắn nhủ"
            </p>
        </section>
    );
}
