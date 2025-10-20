import cloudinary from "../../../../lib/cloudinary";


export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "borbheti", resource_type: "auto" },
        (error, result) => {
          if (error) {
            reject(Response.json({ error: error.message }, { status: 500 }));
          } else {
            resolve(Response.json({ url: result.secure_url, public_id: result.public_id }));
          }
        }
      );
      uploadStream.end(buffer);
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
