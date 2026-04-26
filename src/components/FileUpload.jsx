// components/FileUpload.jsx
"use client";
import { useState } from "react";

const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB per chunk

export default function FileUpload() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");

  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    setStatus("Uploading...");

    for (let i = 0; i < totalChunks; i++) {
      const chunk = file.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
      const formData = new FormData();
      formData.append("chunk", chunk);
      formData.append("chunkIndex", i);
      formData.append("totalChunks", totalChunks);
      formData.append("filename", file.name);

      await fetch("/api/upload-chunk", { method: "POST", body: formData });
      setProgress(Math.round(((i + 1) / totalChunks) * 100));
    }

    setStatus("Done!");
  }

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {progress > 0 && <p>{progress}% — {status}</p>}
    </div>
  );
}