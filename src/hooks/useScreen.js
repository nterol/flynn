import { useState, useEffect } from "react";

const defaultScreenMap = [
  { name: "mobile", minWidth: 0 },
  { name: "tablet portrait", minWidth: 768 },
  { name: "desktop", minWidth: 1200 }
];

const initScreen = (screenMap) =>
  screenMap.reduce((acc, curr) => {
    if (matchMedia(`(min-width: ${curr.minWidth}px)`).matches) acc = curr.name;
    return acc;
  }, "mobile");

function useScreen(screenMap = defaultScreenMap) {
  const defaultScreen = screenMap[0].name;

  const [screen, setScreen] = useState(initScreen(screenMap));

  useEffect(() => {
    const mediaWatcherList = screenMap.map(({ name, minWidth }, i) => {
      const format = matchMedia(`(min-width: ${minWidth}px)`);

      const formatWatcher = (format) => {
        if (format.matches) {
          setScreen(name);
        } else {
          setScreen(screenMap[i - 1] ? screenMap[i - 1].name : defaultScreen);
        }
      };
      format.addListener(formatWatcher);
      return { format, formatWatcher };
    });

    return () => {
      mediaWatcherList.forEach(({ format, formatWatcher }) =>
        format.removeListener(formatWatcher)
      );
    };
  }, [defaultScreen, screenMap]);

  return screen;
}

export default useScreen;