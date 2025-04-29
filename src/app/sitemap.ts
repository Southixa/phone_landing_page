import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: `${BASE_URL}` || 'http://localhost:3000',
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1.0,
        },
    ];
}