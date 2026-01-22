import React from "react";
// Placeholder: Có thể dùng thư viện như react-quill hoặc draft-js để làm Rich Text Editor
export default function RichTextEditor({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Nhập mô tả chi tiết..."
    />
  );
}
