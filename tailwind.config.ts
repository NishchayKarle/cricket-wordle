import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      keyframes: {
        bounceOnce: {
          "0%": {
            transform: "translateY(0)", // Start at the original position
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)", // Bounce upwards
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateY(0)", // Return to the original position
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        spinOnce: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        shake: {
          "0%, 100%": {
            transform: "translateX(0)", // Start and end at the original position
          },
          "25%": {
            transform: "translateX(-5px)", // Move left slightly
          },
          "50%": {
            transform: "translateX(5px)", // Move right slightly
          },
          "75%": {
            transform: "translateX(-5px)", // Move left slightly again
          },
        },
      },
    },
    animation: {
      bounceOnce: "bounceOnce 1s forwards",
      spinOnce: "spinOnce 0.5s linear forwards",
      shakeOnce: "shake 0.5s ease forwards",
    },
  },
  plugins: [],
} satisfies Config;
