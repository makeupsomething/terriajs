import primitiveTrait from "./primitiveTrait";
import ModelTraits from "./ModelTraits";
import objectArrayTrait from "./objectArrayTrait";
import primitiveArrayTrait from "./primitiveArrayTrait";

export class LegendItemTraits extends ModelTraits {
  @primitiveTrait({
    name: "Title",
    description: "The title to display next to this legend item.",
    type: "string",
  })
  title?: string;

  @primitiveTrait({
    name: "Title",
    description:
      "The title to display above this legend item, i.e. marking the top of " +
      "a box on the legend.",
    type: "string",
  })
  titleAbove?: string;

  @primitiveTrait({
    name: "Title",
    description:
      "The title to display below this legend item, i.e. marking the bottom of " +
      "a box on the legend.",
    type: "string",
  })
  titleBelow?: string;

  @primitiveTrait({
    name: "Color",
    description:
      "The CSS color to display for this item. This property is ignored if " +
      "`Legend URL` is specified.",
    type: "string",
  })
  color?: string;

  @primitiveTrait({
    name: "Outline Color",
    description:
      "The CSS color with which to outline this item.",
    type: "string",
  })
  outlineColor?: string;

  @primitiveArrayTrait({
    name: "Multiple Colors",
    description:
      "Multiple colors to show with this item in a grid arrangement.",
    type: "string",
  })
  multipleColors?: string[];

  @primitiveTrait({
    name: "Image URL",
    description:
      "The URL of an image to display with this item.",
    type: "string",
  })
  imageUrl?: string;

  @primitiveTrait({
    name: "Spacing Above",
    description:
      "The number of pixels of extra spacing to place above this item.",
    type: "number",
  })
  spacingAbove?: number;
}

export default class LegendTraits extends ModelTraits {
  @primitiveTrait({
    type: "string",
    name: "URL",
    description: "The URL of the legend image."
  })
  url?: string;

  @primitiveTrait({
    type: "string",
    name: "URL MIME Type",
    description: "The MIME type of the `URL` legend image."
  })
  urlMimeType?: string;

  @objectArrayTrait({
    name: "Items",
    description: "",
    type: LegendItemTraits,
    idProperty: "index"
  })
  items?: LegendItemTraits[];
}
