import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import colorMode from "@/theme/colorMode";

class MyDocument extends Document {
  componentDidMount() {
    document.body.addEventListener("click", (e) => {
      const element = document.createElement("span");
      element.className = "circle";

      element.style.left = e.clientX - 10 + "px";
      element.style.top = e.clientY - 10 + "px";

      document.body.append(element);

      setTimeout(() => {
        element.remove();
      }, 900);
    });
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/jpeg" href="icon.jpeg" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={colorMode.config.initialColorMode}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
