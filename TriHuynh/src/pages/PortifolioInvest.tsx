import React, { useState } from "react";
import {
  TrendingUp,
  BarChart3,
  Shield,
  Target,
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Calendar,
} from "lucide-react";

const PortfolioInvest: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const performanceData = [
    { year: "2022", return: "18.5%", benchmark: "12.3%" },
    { year: "2023", return: "22.1%", benchmark: "15.7%" },
    { year: "2024", return: "16.8%", benchmark: "11.2%" },
  ];

  const investmentStrategies = [
    {
      title: "Phân tích Cơ bản",
      description:
        "Đánh giá giá trị nội tại doanh nghiệp thông qua báo cáo tài chính và triển vọng ngành",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Phân tích Kỹ thuật",
      description:
        "Sử dụng biểu đồ và chỉ báo kỹ thuật để xác định thời điểm mua bán tối ưu",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Quản lý Rủi ro",
      description:
        "Đa dạng hóa danh mục và áp dụng stop-loss để bảo vệ vốn đầu tư",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const topHoldings = [
    {
      symbol: "VIC",
      name: "Tập đoàn Vingroup",
      weight: "8.5%",
      sector: "Bất động sản",
    },
    { symbol: "VCB", name: "Vietcombank", weight: "7.2%", sector: "Ngân hàng" },
    { symbol: "HPG", name: "Hòa Phát Group", weight: "6.8%", sector: "Thép" },
    { symbol: "VNM", name: "Vinamilk", weight: "5.9%", sector: "Thực phẩm" },
    { symbol: "GAS", name: "PV Gas", weight: "5.3%", sector: "Dầu khí" },
  ];

  const achievements = [
    {
      title: "Chứng chỉ Chuyên viên Phân tích Đầu tư",
      org: "VDSC",
      year: "2022",
    },
    {
      title: "Top 10 Nhà đầu tư cá nhân",
      org: "VN30 Competition",
      year: "2023",
    },
    {
      title: "Giải thưởng Danh mục Xuất sắc",
      org: "VietStock Awards",
      year: "2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Investor Portfolio
                </h1>
                <p className="text-sm text-gray-600">Chứng khoán Việt Nam</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === "overview"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                Tổng quan
              </button>
              <button
                onClick={() => setActiveTab("performance")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === "performance"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                Hiệu suất
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === "contact"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                Liên hệ
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">
                  Nhà Đầu Tư Chứng Khoán Chuyên Nghiệp
                </h2>
                <p className="text-lg mb-6 text-green-100">
                  Với 3 năm kinh nghiệm tập trung vào thị trường cổ phiếu Việt
                  Nam, tôi chuyên phân tích cơ bản kết hợp kỹ thuật để đưa ra
                  các quyết định đầu tư cân bằng giữa tăng trưởng và phòng ngừa
                  rủi ro.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>3 năm kinh nghiệm</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Lợi nhuận ổn định</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Quản lý rủi ro</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Philosophy */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Triết lý Đầu tư
              </h3>
              <p className="text-gray-700 mb-6">
                Mục tiêu của tôi là duy trì mức lợi nhuận ổn định và phát triển
                các danh mục đầu tư bền vững theo chu kỳ kinh tế. Tôi tin rằng
                sự kết hợp giữa phân tích cơ bản và kỹ thuật sẽ tạo ra những cơ
                hội đầu tư tối ưu trong dài hạn.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {investmentStrategies.map((strategy, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                        {strategy.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {strategy.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      {strategy.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Holdings */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Top Holdings
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-sm font-medium text-gray-700">
                        Mã CK
                      </th>
                      <th className="text-left py-3 text-sm font-medium text-gray-700">
                        Tên công ty
                      </th>
                      <th className="text-left py-3 text-sm font-medium text-gray-700">
                        Tỷ trọng
                      </th>
                      <th className="text-left py-3 text-sm font-medium text-gray-700">
                        Ngành
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topHoldings.map((holding, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 font-semibold text-green-600">
                          {holding.symbol}
                        </td>
                        <td className="py-3 text-gray-900">{holding.name}</td>
                        <td className="py-3 text-gray-700">{holding.weight}</td>
                        <td className="py-3 text-gray-600">{holding.sector}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thành tích & Chứng chỉ
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {achievement.org} • {achievement.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "performance" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hiệu suất Đầu tư
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Lợi nhuận theo năm
                  </h4>
                  {performanceData.map((data, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          {data.year}
                        </p>
                        <p className="text-sm text-gray-600">So với VN-Index</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">
                          {data.return}
                        </p>
                        <p className="text-sm text-gray-500">
                          {data.benchmark}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Thống kê Tổng quan
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">19.1%</p>
                      <p className="text-sm text-gray-600">Lợi nhuận TB/năm</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">13.1%</p>
                      <p className="text-sm text-gray-600">Vượt thị trường</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">15.3%</p>
                      <p className="text-sm text-gray-600">Độ lệch chuẩn</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">1.25</p>
                      <p className="text-sm text-gray-600">Sharpe Ratio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Liên hệ</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">investor@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Điện thoại</p>
                      <p className="text-gray-600">+84 xxx xxx xxx</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Địa chỉ</p>
                      <p className="text-gray-600">TP. Hồ Chí Minh, Việt Nam</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Dịch vụ Tư vấn
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Phân tích và đánh giá cổ phiếu</li>
                    <li>• Tư vấn xây dựng danh mục đầu tư</li>
                    <li>• Quản lý rủi ro và tối ưu hóa lợi nhuận</li>
                    <li>• Đào tạo kỹ năng đầu tư cá nhân</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Stock Investor Portfolio. Được thiết kế chuyên nghiệp cho thị
            trường chứng khoán Việt Nam.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioInvest;
