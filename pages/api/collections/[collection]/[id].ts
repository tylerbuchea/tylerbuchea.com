import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";
// import SHA256 from "crypto-js/sha256";

import BlobCharacter from "@/utils/BlobCharacter";
// import YolkCharacter from "@/utils/YolkCharacter";
import initMiddleware from "@/utils/initMiddleware";

const corsOptions = { origin: "*" };
const cors = initMiddleware(Cors(corsOptions));

type FailureData = { error: string; message: string };

type SuccessData = any;

// https://dev.to/georgedoescode/tutorial-generative-blob-characters-using-svg-1igg

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
    const seed = Number(num);

    if (collection === "gm") {
      if (type === "svg") {
        // const seedHashed = SHA256(num).toString();
        // console.log(seedHashed);
        const blobCharacter = new BlobCharacter(200, 200, seed);
        const svgString = blobCharacter.draw();

        res.writeHead(200, {
          "Content-Type": "image/svg+xml",
          "Content-Length": svgString.length,
        });
        res.end(svgString);
      } else if (type === "json") {
        const blobCharacter = new BlobCharacter(200, 200, seed);
        blobCharacter.draw();

        const jsonString = JSON.stringify({
          name: `gm #${num}`,
          image: `https://tylerbuchea.com/api/collections/gm/${num}.svg`,
          attributes: Object.entries(blobCharacter.attributes).map(
            ([key, value]) => ({
              trait_type: key,
              value,
            })
          ),
        });

        res.writeHead(200, {
          "Content-Type": "application/json",
          "Content-Length": jsonString.length,
        });
        res.end(jsonString);
      } else {
        throw Error("invalid file type");
      }
    } else if (collection === "egg") {
      // if (type === "png") {
      //   const yolk = new YolkCharacter(seed);
      //   const buffer = yolk.canvas.toBuffer("image/png", {});
      //   res.writeHead(200, {
      //     "Content-Type": "image/png",
      //     "Content-Length": buffer.length,
      //   });
      //   res.end(buffer);
      // } else if (type === "json") {
      //   const jsonString = JSON.stringify({
      //     name: `ChickenTribe Egg #${num}`,
      //     image: `https://tylerbuchea.com/api/collections/egg/${num}.png`,
      //   });
      //   res.writeHead(200, {
      //     "Content-Type": "application/json",
      //     "Content-Length": jsonString.length,
      //   });
      //   res.end(jsonString);
      // } else {
      //   throw Error("invalid file type");
      // }
    } else {
      throw Error("Unknown collection");
    }
  } catch (e: any) {
    return res.status(400).json({ error: e?.message || "Unkown error" });
  }
}
