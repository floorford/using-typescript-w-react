// have to create this because typescript doesnt understand how css modules export/import
// the key string bit is describing the modulised class names that css modules auto creates
declare module "*.css" {
  const css: { [key: string]: string };
  export default css;
}
