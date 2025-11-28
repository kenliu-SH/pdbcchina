declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.gif';
declare module '*.jpeg';
declare module 'chinese-s2t';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
