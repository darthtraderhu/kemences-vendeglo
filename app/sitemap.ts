import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/oldal";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/rendezvenyek", "/helyszin", "/galeria", "/ajanlatkeres", "/kapcsolat", "/adatkezeles"].map((u) => ({
    url: `${siteUrl}${u}`,
  }));
}
