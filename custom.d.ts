declare module '*.svg' {
    const content: string;
  export default content;
}
declare module '*.webp' {
    const content: string;
  export default content;
}
declare module '*.png' {
    const content: string;
  export default content;
}
declare module '*.scss' {
    const content: string;
  export default content;
}
declare module '*.pdf' {
    const content: string;
  export default content;
}
declare module '*.mp4' {
  const src: string;
  export default src;
}
interface Window {
  __ENV__ : {
    REACT_APP_API_IDW: string;
    REACT_APP_API_HOST: string;
    REACT_APP_API_PORT: string;
  }
}
