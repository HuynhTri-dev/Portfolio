import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  Users,
  Target,
  Lightbulb,
  GraduationCap,
  Activity,
  Brain,
  Network,
  Shield,
  UserCheck,
} from "lucide-react";

const PortfolioFounder: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const products = [
    {
      name: "OmniMer EDU",
      description:
        "Phần mềm quản lý học sinh, điểm danh, thu học phí, thiết lập phương thức thanh toán và ưu đãi.",
      icon: <GraduationCap className="w-8 h-8" />,
      features: [
        "Tích hợp ví điện tử",
        "Báo cáo minh bạch",
        "AI gợi ý lộ trình học tập",
      ],
      target: "Trường học, trung tâm đào tạo, gia đình",
    },
    {
      name: "OmniMer Health",
      description:
        "Nền tảng quản lý hồ sơ sức khỏe cá nhân, gợi ý chế độ tập luyện, dinh dưỡng, theo dõi chỉ số.",
      icon: <Activity className="w-8 h-8" />,
      features: [
        "AI học hỏi từ dữ liệu",
        "Gợi ý bài tập phù hợp",
        "Tự động tinh chỉnh theo feedback",
      ],
      target: "Cá nhân, PT, phòng gym, bác sĩ dinh dưỡng",
    },
    {
      name: "OmniaMerge",
      description:
        "Hạt nhân của hệ sinh thái OmniMer - nền tảng AI điều phối kết nối các phần mềm thành phần.",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "Thu thập và phân tích dữ liệu",
        "Gợi ý tối ưu",
        "Kết nối ứng dụng bên thứ ba",
      ],
      target: "Toàn bộ hệ sinh thái OmniMer",
    },
  ];

  const coreValues = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Kết nối mở",
      subtitle: "Interoperability",
      description:
        "Tạo ra khả năng kết nối liền mạch giữa các phần mềm và dịch vụ khác nhau.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Trí tuệ điều phối",
      subtitle: "AI Orchestration",
      description:
        "Sử dụng AI để điều phối và tối ưu hóa trải nghiệm người dùng.",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Lấy người dùng làm trung tâm",
      subtitle: "User-Centric",
      description:
        "Mọi quyết định thiết kế đều hướng đến trải nghiệm tốt nhất cho người dùng.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Dữ liệu minh bạch",
      subtitle: "Transparency & Security",
      description:
        "Đảm bảo tính minh bạch và bảo mật trong xử lý dữ liệu người dùng.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-green-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="text-green-400">Omni</span>
              <span className="text-white">Mer</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-green-400 transition-colors"
              >
                Trang chủ
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-green-400 transition-colors"
              >
                Giới thiệu
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="hover:text-green-400 transition-colors"
              >
                Sản phẩm
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="hover:text-green-400 transition-colors"
              >
                Tầm nhìn
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-green-400 transition-colors"
              >
                Liên hệ
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-green-900/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-4xl font-bold">
              HMT
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-green-400">Huỳnh</span> Minh Trí
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Founder & CEO tại{" "}
            <span className="text-green-400 font-semibold">OmniMer</span>
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Phát triển hệ sinh thái phần mềm kết nối AI đa lĩnh vực
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              Tìm hiểu thêm
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="px-8 py-3 border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition-colors"
            >
              Xem sản phẩm
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-green-400">Tầm nhìn</span> & Sứ mệnh
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Xây dựng một hệ sinh thái mở, nơi các phần mềm có thể tích hợp và
              phối hợp qua một AI trung tâm
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-black/50 p-8 rounded-xl border border-green-500/20">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Thông điệp cá nhân
                </h3>
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "Tôi tin vào sức mạnh kết nối – nơi công nghệ và AI không chỉ
                  xử lý thông tin mà còn trở thành người đồng hành, điều phối
                  các ứng dụng để phục vụ nhu cầu học tập, sức khỏe, tài chính,
                  công việc và cuộc sống thường nhật."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/50 p-8 rounded-xl border border-green-500/20">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Về OmniMer
                </h3>
                <p className="text-gray-300 mb-4">
                  OmniMer là startup công nghệ với sứ mệnh phát triển hệ sinh
                  thái phần mềm mở, được điều phối bởi AI trung tâm.
                </p>
                <p className="text-gray-300">
                  Chúng tôi giải quyết vấn đề rời rạc của phần mềm độc lập, giúp
                  các ứng dụng giao tiếp với nhau để tạo ra trải nghiệm nhất
                  quán và cá nhân hóa.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-green-400">Giá trị</span> cốt lõi
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-black/50 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors"
                >
                  <div className="text-green-400 mb-4">{value.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-green-400 text-sm mb-3">
                    {value.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-green-400">Sản phẩm</span> trong Hệ sinh
              thái
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Các giải pháp công nghệ đột phá được kết nối thông qua nền tảng AI
              điều phối thông minh
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all hover:transform hover:scale-105"
              >
                <div className="text-green-400 mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>

                <div className="mb-6">
                  <h4 className="text-green-400 font-semibold mb-3">
                    Tính năng nổi bật:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-center"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-green-500/20 pt-4">
                  <p className="text-green-400 text-sm font-semibold mb-2">
                    Khách hàng mục tiêu:
                  </p>
                  <p className="text-gray-300 text-sm">{product.target}</p>
                </div>
              </div>
            ))}
          </div>

          {/* OmniaMerge Example */}
          <div className="mt-16 bg-gradient-to-r from-green-900/20 to-green-800/20 p-8 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Ví dụ hoạt động của OmniaMerge
            </h3>
            <p className="text-gray-300">
              Một học sinh cần quản lý lịch học, theo dõi sức khỏe, và thanh
              toán học phí. OmniaMerge sẽ tự động điều phối{" "}
              <span className="text-green-400 font-semibold">OmniMer EDU</span>{" "}
              (quản lý học sinh),
              <span className="text-green-400 font-semibold">
                {" "}
                OmniMer Health
              </span>{" "}
              (theo dõi sức khỏe) và module thanh toán để cung cấp giải pháp
              toàn diện.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-green-400">Tầm nhìn</span> Dài hạn
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/50 p-12 rounded-xl border border-green-500/20">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  OmniMer định hướng trở thành{" "}
                  <span className="text-green-400 font-semibold">
                    nền tảng điều phối thông minh
                  </span>
                  , không chỉ dừng ở các phần mềm do công ty tự phát triển mà
                  còn mở ra khả năng tích hợp dịch vụ từ bên thứ ba.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Biến AI thành{" "}
                  <span className="text-green-400 font-semibold">
                    trợ lý cá nhân đa năng
                  </span>
                  , hiểu rõ từng người dùng, tối ưu các lựa chọn và tự động hóa
                  tác vụ hằng ngày.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-green-400">Liên hệ</span> & Kết nối
            </h2>
            <p className="text-xl text-gray-300">
              Hãy cùng nhau xây dựng tương lai của hệ sinh thái phần mềm thông
              minh
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-green-500/20">
                <h3 className="text-2xl font-bold mb-6 text-green-400">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">founder@omnimer.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">
                      linkedin.com/in/huynhminhtri
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">github.com/omnimer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-green-500/20">
                <h3 className="text-2xl font-bold mb-6 text-green-400">
                  Cơ hội hợp tác
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Users className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">
                      Nhà đầu tư và đối tác chiến lược
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Target className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">
                      Khách hàng doanh nghiệp
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Lightbulb className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">
                      Nhà phát triển và cộng tác viên
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="text-green-400">Omni</span>
              <span className="text-white">Mer</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2024 OmniMer. Kết nối thông minh, Tương lai bền vững.</p>
              <p className="mt-2">Được phát triển bởi Huỳnh Minh Trí</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioFounder;
