import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/connectDB";
import AdminTeam from "@/models/AdminTeam";

async function verifyAdmin(req) {
  const token = req.headers.get("authorization")?.split(" ")[1];
  if (!token) return false;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") return false;
    return decoded;
  } catch (err) {
    return false;
  }
}

// GET all team members
export async function GET(req) {
  await connectDB();

  const auth = await verifyAdmin(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const team = await AdminTeam.find({}).sort({ priority: -1 });
  return NextResponse.json({ success: true, team });
}

// CREATE new member
export async function POST(req) {
  await connectDB();

  const auth = await verifyAdmin(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await req.json();
  const created = await AdminTeam.create(data);

  return NextResponse.json({ success: true, created });
}

// UPDATE team member
export async function PUT(req) {
  await connectDB();

  const auth = await verifyAdmin(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, ...updateData } = await req.json();

  const updated = await AdminTeam.findByIdAndUpdate(id, updateData, { new: true });
  if (!updated) return NextResponse.json({ error: "Team member not found" }, { status: 404 });

  return NextResponse.json({ success: true, updated });
}

// DELETE team member
export async function DELETE(req) {
  await connectDB();

  const auth = await verifyAdmin(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  const deleted = await AdminTeam.findByIdAndDelete(id);

  if (!deleted) return NextResponse.json({ error: "Team member not found" }, { status: 404 });

  return NextResponse.json({ success: true, deleted });
}