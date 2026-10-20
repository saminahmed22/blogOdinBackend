import uniqolor from "uniqolor";

//     theme_color: "hsl(345, 100%, 92%)",
//     theme_color: "hsl(202, 100%, 92%)",
//     theme_color: "hsl(48, 100%, 88%)",
//     theme_color: "hsl(124, 62%, 90%)",
//     theme_color: "hsl(263, 100%, 93%)",
//     theme_color: "hsl(24, 100%, 90%)",
//     theme_color: "hsl(173, 62%, 89%)",
//     theme_color: "hsl(34, 63%, 89%)",
//     theme_color: "hsl(330, 100%, 93%)",
//     theme_color: "hsl(20, 75%, 88%)",

// Lightness should be around 88-92
// Saturation should be around 60-100
export default function getRandomColor({
  lightness = [88, 92],
  saturation = [60, 100],
}) {
  const randomColor = uniqolor.random({
    lightness,
    saturation,
  });

  return randomColor.color;
}
