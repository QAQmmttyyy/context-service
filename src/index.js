import "./styles.css";

let btn = document.querySelector(".trigger");
let btnRect = btn.getBoundingClientRect();
let { left, top, right, bottom, width, height } = btnRect;
let btnCoordinateMap = new Map();

btnCoordinateMap.set("left-top", { x: left, y: top });
btnCoordinateMap.set("left-bottom", { x: left, y: bottom });

btnCoordinateMap.set("center-top", { x: left + Math.abs(width / 2), y: top });
btnCoordinateMap.set("center-bottom", {
  x: left + Math.abs(width / 2),
  y: bottom
});

btnCoordinateMap.set("left-center", { x: left, y: top + Math.abs(height / 2) });
btnCoordinateMap.set("right-center", {
  x: right,
  y: top + Math.abs(height / 2)
});

btnCoordinateMap.set("right-top", { x: right, y: top });
btnCoordinateMap.set("right-bottom", { x: right, y: bottom });

console.log(btnCoordinateMap);

let menu = document.querySelector(".menu");

function getMenuPositionMap(elem) {
  let menuRect = elem.getBoundingClientRect();
  let { width:menuWidth, height:menuHeight } = menuRect;
  let menuPositionMap = new Map();
  console.log('menuRect', menuRect);
  
  // 'side-align'
  menuPositionMap.set("left-top", { x: left - menuWidth, y: top });
  menuPositionMap.set("left-center", {
    x: left - menuWidth,
    y: top + Math.abs(height / 2) - menuHeight / 2
  });
  menuPositionMap.set("left-bottom", {
    x: left - menuWidth,
    y: bottom - menuHeight
  });
  
  menuPositionMap.set("right-top", { x: right, y: top });
  menuPositionMap.set("right-center", {
    x: right,
    y: top + Math.abs(height / 2) - menuHeight / 2
  });
  menuPositionMap.set("right-bottom", { x: right, y: bottom - menuHeight });
  
  menuPositionMap.set("above-left", { x: left, y: top - menuHeight });
  menuPositionMap.set("above-center", {
    x: left + Math.abs(width / 2) - menuWidth / 2,
    y: top - menuHeight
  });
  menuPositionMap.set("above-right", {
    x: right - menuWidth,
    y: top - menuHeight
  });
  
  menuPositionMap.set("below-left", { x: left, y: bottom });
  menuPositionMap.set("below-center", {
    x: left + Math.abs(width / 2) - menuWidth / 2,
    y: bottom
  });
  menuPositionMap.set("below-right", { x: right - menuWidth, y: bottom });
  console.log("menuPositionMap", menuPositionMap);

  return menuPositionMap;
}



btn.addEventListener("click", ev => {
  menu.style.display = 'block';
  let dataPos = menu.getAttribute("data-pos");
  console.log(dataPos);

  let pos = getMenuPositionMap(menu).get(dataPos);
  console.log(pos);

  menu.style.cssText = `display: block; opacity: 1; left: ${pos.x}px; top: ${pos.y}px;`;
});
