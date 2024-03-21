import fs from "fs";

const data = JSON.parse(
  fs.readFileSync(
    "/Users/jacovie/Library/Application Support/factorio/script-output/export.json",
    { encoding: "utf-8" }
  )
);

Object.entries(data).forEach(([key, value]) => {
  fs.writeFileSync(
    `/Users/jacovie/dev/github.com/juegodynamics/forge/src/data/${key}.json`,
    JSON.stringify(
      value,
      (replaceKey, replaceValue) => {
        if (replaceKey.includes("creative-mod")) return undefined;
        return replaceValue;
      },
      2
    ),
    { encoding: "utf-8" }
  );
});
