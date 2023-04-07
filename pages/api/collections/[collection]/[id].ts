import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";

import BlobCharacter from "@/utils/BlobCharacter";
import initMiddleware from "@/utils/initMiddleware";

const corsOptions = { origin: "*" };
const cors = initMiddleware(Cors(corsOptions));

type FailureData = { error: string; message: string };

type SuccessData = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FailureData | SuccessData>
) {
  try {
    await cors(req, res);
    const { collection, id } = req.query;
    if (!collection || !id || Array.isArray(id)) {
      throw Error("Missing collection or id");
    }
    const [num, type] = id.split(".");

    if (collection === "gm") {
      if (type === "svg") {
        const seed = Number(num);
        const blobCharacter = new BlobCharacter(200, 200, seed);
        const svgString = blobCharacter.draw();

        res.writeHead(200, {
          "Content-Type": "image/svg+xml",
          "Content-Length": svgString.length,
        });
        res.end(svgString);
      }

      if (type === "json") {
        const jsonString = JSON.stringify({
          name: `gm #${num}`,
          image: `https://tylerbuchea.com/api/collections/gm/${num}.svg`,
        });

        res.writeHead(200, {
          "Content-Type": "application/json",
          "Content-Length": jsonString.length,
        });
        res.end(jsonString);
      }
    } else {
      throw Error("Unknown collection");
    }
  } catch (e: any) {
    return res
      .status(400)
      .json({ error: "bad request", message: e?.message || "Unkown error" });
  }
}
