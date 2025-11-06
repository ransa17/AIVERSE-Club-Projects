import { auth } from "@/auth";

export default function middleware(req) {
  return auth(req);
}
