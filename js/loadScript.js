let set = new Set();

export const loadScript = (url, callback) => {
  if (!set.has(url)) {
    set.add(url);

    const element = document.createElement("script");
    element.type = "module";
    element.src = url;
    element.onload = callback;
    document.body.appendChild(element);
  }
};
