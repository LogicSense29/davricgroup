import { writeFile, appendFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req) {
  const formData = await req.formData();
  const chunk = formData.get("chunk");
  const chunkIndex = Number(formData.get("chunkIndex"));
  const filename = formData.get("filename");

  const uploadDir = path.join("/home/davrqrte/davric-main", "public/uploads");
  await mkdir(uploadDir, { recursive: true });

  const buffer = Buffer.from(await chunk.arrayBuffer());
  const filePath = path.join(uploadDir, filename);

  if (chunkIndex === 0) {
    await writeFile(filePath, buffer);
  } else {
    await appendFile(filePath, buffer);
  }

  return Response.json({ success: true });
}