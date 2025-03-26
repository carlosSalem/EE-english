import { environment } from "../../environment/environment";

import type { APIRoute } from "astro";
import fs from "fs";

async function writeFileXmlData(xmlData: string) {
  //const json = await fs.readFileSync('/sitemap-news.xml','utf-8')
  //console.log(json);

  const fileData = await fs.writeFileSync("public/sitemap-news.xml", xmlData);
  console.log("write?", fileData);
}

export const GET: APIRoute = async () => {
  const value = await updateSitemapNewsXml();
  console.log("adios", value);

  return new Response(value);
};
async function updateSitemapNewsXml() {
  try {
    const response = await fetch(
      `${environment.baseUrl}/sitemap-api/sitemap.xml`
    );
    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    // Return the response text
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error fetching the sitemap:", error);
    throw error;
  }
}
