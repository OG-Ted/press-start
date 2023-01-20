// NodeJS-based GROQ queries that are persisted into the filesystem
const sanityClient = require("@sanity/client")
const fs = require("fs")
const path = require("path")
const yaml = require("js-yaml")

// @TODO: Update with your project's config
const client = sanityClient({
  projectId: "aazzk7f9",
  dataset: "production",
  apiVersion: "v2022-02-26",
  // As this runs in a static generation context, we can afford not using the CDN to always get the freshest data
  useCdn: false,
});

// @TODO: write your GROQ queries here
const QUERIES = [
  //GAMES QUERY
  {
    filename: "game.json",
    query: `*[_type == "game"]{
      company,
      "cover": cover.asset->url,
      name,
    }`,
  },
  {
    filename: "cocktail_list.json",
    query: `*[_type == "business"]{
      "cocktails": cocktail_list[]
    }`,
  },
  {
    filename: "craft_bottle_list.json",
    query: `*[_type == "business"]{
      "craft_bottles": craft_bottle_list[]
    }`,
  },
  {
    filename: "domestic_bottle_list.json",
    query: `*[_type == "business"]{
      "domestic_bottles": domestic_bottle_list[]
    }`,
  },
  {
    filename: "on-tap-list.json",
    query: `*[_type == "business"]{
      "on_tap_list": on_tap_list[]
    }`,
  },
  {
    filename: "prices.json",
    query: `*[_type == "business"]{
      prices
    }`,
  },
  {
    filename: "social.json",
    query: `*[_type == "business"]{
      social
    }`,
  },
  {
    filename: "seo.json",
    query: `*[_type == "business"]{
      keywords,
      desc,
      title
    }`,
  },
  {
    filename: "hours_location.json",
    query: `*[_type == "business"]{
      "hours_location": hours_location{
        address,
        hours
      }
    }`,
  },
];

const promises = QUERIES.map(({ filename, query }) => {
  return new Promise(async (resolve, reject) => {
    try {
      // 1. Get the data from Sanity
      const data = await client.fetch(query);

      // 2. Save that as JSON to disk
      fs.writeFileSync(
        filename,
        JSON.stringify(data)
      );
 
      // 3. Convert JSON Data to Yaml
      const doc = yaml.load(fs.readFileSync('game.json', 'utf8'));
      let configYaml = yaml.dump(doc);
      await fs.writeFileSync("_data/game.yaml", configYaml, "utf8");

      const cocktailDoc = yaml.load(fs.readFileSync('cocktail_list.json', 'utf8'));
      let configYaml2 = yaml.dump(cocktailDoc);
      await fs.writeFileSync("_data/cocktail_list.yaml", configYaml2, "utf8");

      const craftBottleDoc = yaml.load(fs.readFileSync('craft_bottle_list.json', 'utf8'));
      let configYaml3 = yaml.dump(craftBottleDoc);
      await fs.writeFileSync("_data/craft_bottle_list.yaml", configYaml3, "utf8");

      const domesticBottleDoc = yaml.load(fs.readFileSync('domestic_bottle_list.json', 'utf8'));
      let configYaml4 = yaml.dump(domesticBottleDoc);
      await fs.writeFileSync("_data/domestic_bottle_list.yaml", configYaml4, "utf8")

      const hoursLocationDoc = yaml.load(fs.readFileSync('hours_location.json', 'utf8'));
      let configYaml5 = yaml.dump(hoursLocationDoc);
      await fs.writeFileSync("_data/hours_location.yaml", configYaml5, "utf8")

      const onTapListDoc = yaml.load(fs.readFileSync('on-tap-list.json', 'utf8'));
      let configYaml6 = yaml.dump(onTapListDoc);
      await fs.writeFileSync("_data/on_tap_list.yaml", configYaml6, "utf8")

      const pricesDoc = yaml.load(fs.readFileSync('prices.json', 'utf8'));
      let configYaml7 = yaml.dump(pricesDoc);
      await fs.writeFileSync("_data/price.yaml", configYaml7, "utf8")

      const seoDoc = yaml.load(fs.readFileSync('seo.json', 'utf8'));
      let configYaml8 = yaml.dump(seoDoc);
      await fs.writeFileSync("_data/seo-data.yaml", configYaml8, "utf8")

      const socialDoc = yaml.load(fs.readFileSync('social.json', 'utf8'));
      let configYaml9 = yaml.dump(socialDoc);
      await fs.writeFileSync("_data/social-data.yaml", configYaml9, "utf8")

      resolve(true);
    } catch (error) {
      console.error(`${filename} went wrong`, error);
      reject();
    }
  });
});

async function getData() {
  await Promise.allSettled(promises);
}

getData();