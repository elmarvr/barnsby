import path from "path";
import _ from "lodash";
import sharp from "sharp";
import fs from "fs";
import theme from "../theme/theme";

const isNumber = (value) => {
  const num = _.toNumber(value);
  return !_.isNaN(num);
};

const toPx = (value) => parseInt(value) * 16;

const getBreakpoints = () => {
  const { breakpoints } = theme;

  return _(breakpoints)
    .mapValues(toPx)
    .reduce((result, width, br) => {
      if (!isNumber(br)) {
        result[br] = width;
      }
      return result;
    }, {});
};

const shiftValues = (obj) => {
  const keys = _.keys(obj);
  const values = _.values(obj).slice(1);

  return _.reduce(
    keys,
    (result, key, index) => {
      const value = values[index];
      if (value) {
        result[key] = value;
      }
      return result;
    },
    {}
  );
};

const generateResponsiveImages = (src) => {
  const breakpoints = getBreakpoints();
  const shiftedBreakpoints = shiftValues(breakpoints);

  const filename = path.parse(src).name;

  return _.reduce(
    shiftedBreakpoints,
    (result, width, bp) => {
      const outputFile = `${filename}-${bp}.webp`;

      sharp(`./public/${src}`)
        .resize({
          width,
        })
        .toFile(`./public/${outputFile}`);

      result[bp] = outputFile;
      return result;
    },
    {}
  );
};

const getResponsiveBackground = (src) => {
  const images = generateResponsiveImages(src);
  return _.mapValues(images, (image) => `url(/${image})`);
};

const getLocales = () => {
  const i18nPath = `${process.cwd()}/i18n`;

  return fs.readdirSync(i18nPath).map((file) => path.parse(file).name);
};

export { generateResponsiveImages, getResponsiveBackground, getLocales };
