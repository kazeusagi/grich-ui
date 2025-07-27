import type { Preview } from "@storybook/react-vite";
import { themes } from "storybook/theming";

const preview: Preview = {
  parameters: {
    docs: {
      // Docsのテーマ設定
      theme: themes.dark,
    },
  },
};

export default preview;
