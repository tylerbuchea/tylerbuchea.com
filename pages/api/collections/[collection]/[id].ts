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
    const seed = Number(id);

    const blobCharacter = new BlobCharacter(200, 200, seed);
    const svgString = blobCharacter.draw();

    res.writeHead(200, {
      "Content-Type": "image/svg+xml",
      "Content-Length": svgString.length,
    });

    res.end(svgString);
  } catch (e: any) {
    return res
      .status(400)
      .json({ error: "bad request", message: e?.message || "Unkown error" });
  }
}
