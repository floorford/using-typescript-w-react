// have to create this because typescript doesnt understand how css modules export/import
// the key string bit is describing the modulised class names that css modules auto creates
declare module "*.css" {
  const css: { [key: string]: string };
  export default css;
}

// the svg loader we are using transforms svgs to react components, hence why we are declaring it to be so
declare module "*.svg" {
  const ReactComponent: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export default ReactComponent;
}
