import type { Preview } from '@storybook/react-vite';
import { customTheme } from './theme';

const preview: Preview = {
  parameters: {
    docs: {
      // Docsのテーマ設定
      theme: customTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i, // 引数名に特定の文言が含まれていたらカラーピッカーを表示
        date: /Date$/i, // 引数名に特定の文言が含まれていたらカレンダーを表示
      },
    },
  },
};

export default preview;
