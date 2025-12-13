# Hướng dẫn tích hợp SePay Webhooks

File này hướng dẫn bạn cách thiết lập Webhook để tự động cập nhật danh sách người donate trên Portfolio của bạn.

## Nguyên lý hoạt động

1. Người dùng chuyển khoản qua QR Code.
2. Ngân hàng báo biến động số dư.
3. SePay (đã kết nối với bank) nhận diện giao dịch.
4. SePay gọi vào **API Webhook** của bạn (bạn cần tạo cái này).
5. API Webhook lưu dữ liệu vào Database.
6. Frontend (`QRSection.tsx`) gọi API để lấy danh sách hiển thị.

---

## Bước 1: Chuẩn bị Backend (API)

Vì Portfolio của bạn là Frontend (React/Vite), bạn cần một nơi để lưu trữ dữ liệu donate. Bạn có thể dùng:

- **Cách 1 (Khuyên dùng):** Supabase (Database + API miễn phí, dễ dùng).
- **Cách 2:** Node.js + Express (Cần Hosting/VPS).
- **Cách 3:** Google Sheets + App Script (Miễn phí, không cần server).

### Ví dụ code xử lý Webhook (Node.js/Express)

```javascript
app.post("/api/sepay-webhook", async (req, res) => {
  const data = req.body;

  // SePay gửi dữ liệu dạng:
  // {
  //   "id": 123,
  //   "gateway": "VIB",
  //   "transactionDate": "2023-11-20 14:00:00",
  //   "accountNumber": "033...",
  //   "content": "Cuu Dev loi nhan",
  //   "transferType": "in",
  //   "transferAmount": 50000,
  //   "accumulated": 50000,
  //   "code": "DH123", ...
  // }

  // 1. Kiểm tra bảo mật (API Key nếu có)

  // 2. Lưu vào Database
  await db.collection("donations").add({
    name: extractName(data.content), // Hàm tự viết để lọc tên từ nội dung
    amount: data.transferAmount,
    message: data.content,
    createdAt: new Date(),
  });

  // 3. Phản hồi cho SePay
  return res.json({ success: true });
});
```

---

## Bước 2: Cấu hình trên SePay

1. Đăng nhập vào [my.sepay.vn](https://my.sepay.vn).
2. Vào mục **Webhooks**.
3. Bấm **Thêm Webhook**.
4. Điền thông tin:
   - **Tên:** Portfolio Webhook
   - **Url nhận dữ liệu:** `https://api-cua-ban.com/api/sepay-webhook` (Link API bạn tạo ở Bước 1)
   - **Sự kiện:** Chọn `Giao dịch chiều vào (Incoming)`
5. Bấm **Lưu**.

---

## Bước 3: Cập nhật Frontend

Trong file `src/components/donate/QRSection.tsx`, mình đã tạo sẵn biến `donations`. Bạn chỉ cần sửa phần `useEffect` để gọi API của bạn.

```typescript
useEffect(() => {
  const fetchDonations = async () => {
    try {
      // Gọi API lấy danh sách donate từ Database của bạn
      const res = await fetch("https://api-cua-ban.com/api/donations");
      const data = await res.json();
      setDonations(data);

      // Tính tổng
      const total = data.reduce((acc, curr) => acc + curr.amount, 0);
      setTotalAmount(total);
    } catch (error) {
      console.error("Lỗi lấy data:", error);
    }
  };

  fetchDonations();

  // Có thể dùng setInterval để auto refresh mỗi 30s
  const interval = setInterval(fetchDonations, 30000);
  return () => clearInterval(interval);
}, []);
```

## Chúc bạn thành công!

Nếu cần setup backend chi tiết hơn (như dùng Supabase), hãy nhắn mình nhé!
